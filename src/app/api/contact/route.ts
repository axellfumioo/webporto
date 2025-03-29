import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import crypto from "crypto";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const sitekey = process.env.RECAPTCHA_SECRET_KEY;
  const { name, email, message, captchaToken } = await request.json();
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${sitekey}&response=${captchaToken}`;
  const captchaRes = await fetch(verifyUrl, { method: "POST" });
  const captchaData = await captchaRes.json();
  const fonnteToken = process.env.FONNTE_TOKEN;
  const phoneNumber = process.env.PHONE_NUMBER;
  const data = new FormData();

  if (!captchaToken) {
    return NextResponse.json(
      { success: false, message: "reCAPTCHA required" },
      { status: 400 }
    );
  }

  try {
    if (!captchaData.success) {
      return NextResponse.json(
        { success: false, message: "Invalid reCAPTCHA" },
        { status: 400 }
      );
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (typeof name !== "string" || name.length < 2 || name.length > 50) {
      return NextResponse.json(
        { success: false, error: "Name must be between 2 and 50 characters" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    if (
      typeof message !== "string" ||
      message.length < 10 ||
      message.length > 1000
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Message must be between 10 and 1000 characters",
        },
        { status: 400 }
      );
    }

    const sanitizedMessage = message.replace(/<[^>]*>?/gm, "");

    const compiledMessage = `New message from your website, here are the details:\n
Name:
${name}\n
Email:
${email}\n
Message:
${sanitizedMessage}`;

    data.append("target", `${phoneNumber}`);
    data.append("message", `${compiledMessage}`);
    data.append("schedule", "0");
    data.append("delay", "2");
    data.append("countryCode", "62");

    await fetch("https://api.fonnte.com/send", {
      method: "POST",
      mode: "cors",
      headers: new Headers({
        Authorization: `${fonnteToken}`,
      }),
      body: data,
    });

    const contact = await prisma.contact.create({
      data: { name, email, message: sanitizedMessage },
    });

    return NextResponse.json(
      { success: true, message: "Message sent successfully", contact },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to save contact" },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  return NextResponse.json(
    {
      success: false,
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
