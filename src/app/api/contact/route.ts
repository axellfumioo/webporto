import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

const prisma = new PrismaClient();
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(3, "5 m"), // 5 request per 10 detik
  analytics: true,
});

export async function POST(request: Request) {
  // Gunakan IP dari Next.js untuk anti-spoofing
  const ip = request.headers.get("x-vercel-ip-country") || request.headers.get("x-real-ip") || request.headers.get("x-forwarded-for") || "unknown";

  const { success } = await ratelimit.limit(ip);
  if (!success) {
    return NextResponse.json({ error: "Too many requests, wait a bit!" }, { status: 429 });
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
