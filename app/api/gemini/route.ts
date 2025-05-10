import { NextResponse } from "next/server";

// Define the system prompt for the SoftSell assistant
const systemPrompt = `You are SoftSell's AI assistant, an expert in software license resale.
Your role is to help users understand how SoftSell works and answer questions about selling software licenses.

Key information about SoftSell:
- SoftSell helps businesses sell unused software licenses quickly and securely
- We offer up to 80% of retail value for enterprise licenses
- Payment is processed within 24-48 hours after accepting an offer
- We accept most major software licenses (Microsoft, Adobe, Autodesk, Oracle, SAP, etc.)
- Our platform uses bank-level encryption and secure transfer protocols
- We work only with vetted enterprise buyers

Keep your responses friendly, helpful, and concise. If you don't know the answer to a specific question, 
suggest that the user fill out the contact form for personalized assistance from a license specialist.`;

// Interface for the expected request body
interface RequestBody {
  prompt: string;
}

// Interface for the Gemini API response
interface GeminiResponse {
  candidates?: Array<{
    content?: {
      parts?: Array<{
        text: string;
      }>;
    };
  }>;
  error?: {
    code: number;
    message: string;
    status: string;
  };
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    // Parse and validate request body
    const { prompt }: RequestBody = await request.json();
    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json({ error: "Invalid prompt provided" }, { status: 400 });
    }

    // Validate API key
    const GEMINI_API_KEY: string | undefined = process.env.GEMINI_API_KEY;
    if (!GEMINI_API_KEY) {
      console.error("GEMINI_API_KEY is not set in environment variables");
      return NextResponse.json({ error: "API key not configured" }, { status: 500 });
    }

    // Combine system prompt with user prompt
    const fullPrompt: string = `${systemPrompt}\n\nUser question: ${prompt}`;
    const GEMINI_API_URL: string = "https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent";

    // Make request to Gemini API
    const response: Response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: fullPrompt,
              },
            ],
          },
        ],
      }),
    });

    // Check for HTTP errors
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Gemini API error: Status ${response.status}, Response: ${errorText}`);
      throw new Error(`Gemini API request failed with status ${response.status}: ${errorText}`);
    }

    // Parse response
    const data: GeminiResponse = await response.json();
    if (data.error) {
      console.error(`Gemini API returned an error: ${data.error.message}`);
      return NextResponse.json({ error: data.error.message }, { status: 500 });
    }

    const generatedText: string = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't generate a response.";
    return NextResponse.json({ text: generatedText });
  } catch (error: any) {
    console.error("Error in /api/gemini:", error.message, error.stack);
    return NextResponse.json(
      { error: `Failed to fetch response: ${error.message}` },
      { status: 500 }
    );
  }
}