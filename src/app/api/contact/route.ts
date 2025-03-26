import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";
import crypto from "crypto";

const prisma = new PrismaClient();
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(3, "5 m"), // 3 requests per 5 minutes
  analytics: true,
});

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-vercel-ip-country") ||
    request.headers.get("x-real-ip") ||
    request.headers.get("x-forwarded-for") ||
    "unknown";

  const { success } = await ratelimit.limit(ip);

  if (!success) {
    return NextResponse.json(
      { error: "Too many requests, wait a bit!" },
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

    if (typeof name !== "string" || name.length < 2 || name.length > 50) {
      return NextResponse.json(
        { error: "Name must be between 2 and 50 characters" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    if (typeof message !== "string" || message.length < 10 || message.length > 1000) {
      return NextResponse.json(
        { error: "Message must be between 10 and 1000 characters" },
        { status: 400 }
      );
    }

    const sanitizedMessage = message.replace(/<[^>]*>?/gm, ""); // Remove HTML tags
    const messageHash = crypto.createHash("sha256").update(sanitizedMessage).digest("hex");

    const recentMessage = await redis.get(`message:${email}`);
    if (recentMessage && recentMessage === messageHash) {
      return NextResponse.json(
        { error: "Duplicate message detected. Please try again later." },
        { status: 400 }
      );
    }

    await redis.set(`message:${email}`, messageHash, { ex: 300 }); // Store hash of message for 5 minutes

    const contact = await prisma.contact.create({
      data: { name, email, message: sanitizedMessage },
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
      message: "This endpoint only accepts POST requests",
    },
    {
      status: 405,
      headers: {
        Allow: "POST",
      },
    }
  );
}
