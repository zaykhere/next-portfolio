import { NextRequest, NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { z } from "zod";
import { RateLimiterMemory } from "rate-limiter-flexible";

const rateLimiter = new RateLimiterMemory({
  points: 5, // 5 requests
  duration: 60 * 5, // per 5 minutes
});

const schema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  message: z.string().min(5).max(2000),
  social: z.string().optional(),
  honeypot: z.string().optional(), // spam trap
});

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("x-real-ip") ||
      "unknown";

    // rate limit
    try {
      await rateLimiter.consume(ip);
    } catch {
      return NextResponse.json(
        { error: "Too many requests" },
        { status: 429 }
      );
    }

    const body = await req.json();

    // honeypot spam check
    if (body.honeypot && body.honeypot !== "") {
      return NextResponse.json({ ok: true });
    }

    const data = schema.parse(body);

    // block suspicious messages
    const spamWords = ["viagra", "casino", "crypto", "loan"];
    const isSpam = spamWords.some((word) =>
      data.message.toLowerCase().includes(word)
    );

    if (isSpam) {
      return NextResponse.json(
        { error: "Spam detected" },
        { status: 400 }
      );
    }

    await sql`
      INSERT INTO contacts (name, email, message, social, ip)
      VALUES (${data.name}, ${data.email}, ${data.message}, ${data.social}, ${ip})
    `;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}