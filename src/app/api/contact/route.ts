import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid work email"),
  company: z.string().min(2, "Company name is required"),
  service: z.string().min(1, "Please select an area of interest"),
  budget: z.string().min(1, "Please select your estimated budget"),
  timeline: z.string().min(1, "Please select your target timeline"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Anti-spam honeypot verification
    if (body.honeypot && body.honeypot.trim() !== "") {
      return NextResponse.json(
        { error: "Spam bot submission blocked" },
        { status: 400 }
      );
    }

    const validatedData = contactSchema.parse(body);

    console.log("[Enterprise Lead Received]:", {
      name: validatedData.name,
      email: validatedData.email,
      company: validatedData.company,
      service: validatedData.service,
      budget: validatedData.budget,
      timeline: validatedData.timeline,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message:
        "Thank you! Your architectural inquiry has been routed to our Principal Solutions Architect. We will connect within 4 business hours.",
      leadId: `LEAD-${Date.now().toString(36).toUpperCase()}`,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.issues },
        { status: 422 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error processing request" },
      { status: 500 }
    );
  }
}
