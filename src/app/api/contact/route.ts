import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const rateLimit = new Map(); // Cache untuk menyimpan jumlah request per IP

function checkRateLimit(ip: string) {
  const now = Date.now();
  
  if (rateLimit.has(ip)) {
    const { count, lastRequest } = rateLimit.get(ip);
    
    if (now - lastRequest < 10000) { // 10 detik
      if (count >= 5) {
        return false; // Rate limit exceeded
      }
      rateLimit.set(ip, { count: count + 1, lastRequest: now });
    } else {
      rateLimit.set(ip, { count: 1, lastRequest: now });
    }
  } else {
    rateLimit.set(ip, { count: 1, lastRequest: now });
  }

  return true; // Allowed
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for") || "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests, please try again later." },
      { status: 429 }
    );
  }

  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const contact = await prisma.contact.create({
      data: { name, email, message },
    });

    return NextResponse.json(
      { message: "Message sent successfully", contact },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to save contact" },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  return NextResponse.json(
    { 
      error: "Method not allowed",
      message: "This endpoint only accepts POST requests" 
    },
    { 
      status: 405,
      headers: {
        'Allow': 'POST'
      }
    }
  );
}
