import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, attending, guests, phone, timestamp } = body;

    if (!name || typeof name !== "string") {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 }
      );
    }

    const scriptUrl =
      process.env.GOOGLE_SCRIPT_URL ||
      process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

    // If Google Apps Script Web App URL is configured, forward the data
    if (scriptUrl) {
      try {
        const response = await fetch(scriptUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            attending,
            guests,
            phone,
            timestamp: timestamp || new Date().toISOString(),
          }),
        });

        if (!response.ok) {
          console.warn("Google Script returned status:", response.status);
        }
      } catch (err) {
        console.warn("Failed to reach Google Script Web App:", err);
      }
    }

    return NextResponse.json({
      success: true,
      message: "RSVP recorded successfully",
    });
  } catch (error) {
    console.error("Error processing RSVP submission:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
