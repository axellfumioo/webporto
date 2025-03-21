import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const rateLimitMap = new Map<string, { count: number; lastRequest: number }>();
const RATE_LIMIT_WINDOW = 30 * 60 * 1000; // 30 minutes (1,800,000 ms)
const RATE_LIMIT_MAX = 15; // Maximum 15 requests per 30 minutes

async function getIP(request: Request): Promise<string | null> {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error("Failed to fetch IP:", error);
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    return ip;
  }
}

async function rateLimit(request: Request): Promise<boolean> {
  const ip = await getIP(request);

  if (!ip) {
    console.error("Failed to retrieve IP address.");
    
    return false;
  }

  const currentTime = Date.now();

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, { count: 1, lastRequest: currentTime });
  } else {
    const userData = rateLimitMap.get(ip)!;
    const elapsedTime = currentTime - userData.lastRequest;

    if (elapsedTime > RATE_LIMIT_WINDOW) {
      rateLimitMap.set(ip, { count: 1, lastRequest: currentTime });
    } else {
      if (userData.count >= RATE_LIMIT_MAX) {
        return false;
      }
      rateLimitMap.set(ip, {
        count: userData.count + 1,
        lastRequest: currentTime,
      });
    }
  }

  // Cleanup old entries untuk menghindari memory leak
  setTimeout(() => {
    rateLimitMap.delete(ip);
  }, RATE_LIMIT_WINDOW);

  return true;
}

export async function POST(request: Request) {
  if (!(await rateLimit(request))) {
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

export async function GET() {
  return NextResponse.json(
    { message: "Invalid request method." },
    { status: 405 }
  );
}
