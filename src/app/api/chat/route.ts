import { createUIMessageStream, createUIMessageStreamResponse } from "ai";
import { runWellnessAgent } from "@/agent/graph";

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Map incoming messages to normalized ChatMessage format
    const chatMessages = (messages || []).map((m: any) => ({
      role: (m.role || "user") as "user" | "assistant" | "system",
      content: typeof m.content === "string" ? m.content : "",
    }));

    // Execute LangGraph State Machine (ClassifierNode -> AssessmentNode / RAG_Node)
    const { text: responseText } = await runWellnessAgent(chatMessages);

    // Natural typing cadence chunking for streaming UI
    const words = responseText.split(" ");
    const chunks: string[] = [];
    for (let i = 0; i < words.length; i += 2) {
      chunks.push(words.slice(i, i + 2).join(" ") + (i + 2 < words.length ? " " : ""));
    }

    const stream = createUIMessageStream({
      async execute({ writer }) {
        let chunkIndex = 0;
        for (const chunk of chunks) {
          writer.write({
            type: "text-delta",
            id: `part-${chunkIndex++}`,
            delta: chunk,
          });
          // Non-blocking micro-delay for realistic typing flow
          await new Promise((resolve) => setTimeout(resolve, 35));
        }
      },
    });

    return createUIMessageStreamResponse({ stream });
  } catch (error) {
    console.error("AI Concierge Stream Error:", error);
    return new Response(JSON.stringify({ error: "Failed to connect with Xanso Guide." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
