import { StateGraph, START, END, Annotation } from "@langchain/langgraph";
import { AgentState, AgentIntent, ChatMessage } from "./state";

/**
 * State Annotation for LangGraph engine complying with AGENT.MD Section 3.
 */
export const AgentStateAnnotation = Annotation.Root({
  messages: Annotation<ChatMessage[]>({
    reducer: (x, y) => x.concat(y),
    default: () => [],
  }),
  userId: Annotation<string>({
    reducer: (x, y) => y ?? x,
    default: () => "anonymous",
  }),
  intent: Annotation<AgentIntent>({
    reducer: (x, y) => y ?? x,
    default: () => "casual_chat",
  }),
  assessmentProgress: Annotation<AgentState["assessmentProgress"]>({
    reducer: (x, y) => ({ ...x, ...y }),
    default: () => ({
      currentQuestionIndex: 0,
      answers: {},
      isComplete: false,
    }),
  }),
  recommendedProgramId: Annotation<string | null>({
    reducer: (x, y) => y ?? x,
    default: () => null,
  }),
  responseOutput: Annotation<string | undefined>({
    reducer: (x, y) => y ?? x,
    default: () => undefined,
  }),
});

export type State = typeof AgentStateAnnotation.State;

// ==============================================================================
// 1. ClassifierNode: Determines user intent
// ==============================================================================
export async function classifierNode(state: State): Promise<Partial<State>> {
  const lastMsg = state.messages[state.messages.length - 1]?.content.toLowerCase() || "";

  let intent: AgentIntent = "casual_chat";

  if (lastMsg.includes("assess") || lastMsg.includes("quiz") || lastMsg.includes("goal")) {
    intent = "assessment";
  } else if (lastMsg.includes("book") || lastMsg.includes("schedule") || lastMsg.includes("calendar")) {
    intent = "booking";
  } else if (lastMsg.includes("help") || lastMsg.includes("login") || lastMsg.includes("subscription")) {
    intent = "support";
  }

  return { intent };
}

// ==============================================================================
// 2. AssessmentNode: Manages 8-question wellness diagnostic
// ==============================================================================
export async function assessmentNode(state: State): Promise<Partial<State>> {
  const qIndex = state.assessmentProgress.currentQuestionIndex;

  const assessmentQuestions = [
    "What is your primary physical focus today? (e.g. Spine alignment, Hip opening, Breath)",
    "How many days per week can you dedicate 15-30 minutes to practice?",
    "Do you experience any chronic lumbar or cervical stiffness?",
  ];

  if (qIndex < assessmentQuestions.length) {
    const question = assessmentQuestions[qIndex];
    return {
      assessmentProgress: {
        ...state.assessmentProgress,
        currentQuestionIndex: qIndex + 1,
        isComplete: false,
      },
      responseOutput: `Sanctuary Assessment [Step ${qIndex + 1}/${assessmentQuestions.length}]:\n\n${question}`,
    };
  }

  return {
    assessmentProgress: {
      ...state.assessmentProgress,
      isComplete: true,
    },
    recommendedProgramId: "morning-vinyasa-flow",
    responseOutput:
      "Thank you for sharing your body's rhythm. Based on your inputs, we have calibrated your journey:\n\n" +
      "• **Recommended Path:** 21-Day Spine & Alignment Journey\n" +
      "• **First Practice:** Morning Vinyasa & Core Cadence\n\n" +
      "Would you like to [Begin Practice](#programs) now?",
  };
}

// ==============================================================================
// 3. RAG_Node: Semantic Knowledge & Class Recommendations
// ==============================================================================
export async function ragNode(state: State): Promise<Partial<State>> {
  const lastMsg = state.messages[state.messages.length - 1]?.content.toLowerCase() || "";

  let response =
    "Namaste. I am your Xanso Sanctuary Guide. Step onto your mat with intentional breath.\n\n" +
    "• **Morning Vinyasa Flow** (45 Min Vigorous)\n" +
    "• **Deep Yin Release** (60 Min Restorative)\n\n" +
    "Explore our schedule: [View Daily Live Classes](#programs).";

  if (lastMsg.includes("back") || lastMsg.includes("posture") || lastMsg.includes("desk")) {
    response =
      "To release tension from prolonged desk work, align your axial skeleton with:\n\n" +
      "• **15-Min Desk Posture Reset** (Guided by Maya Lin)\n" +
      "• **Supported Cat-Cow & Child's Pose** (Decompresses lumbar spine)\n\n" +
      "Ready to release? [Start 15-Min Desk Reset](#programs).";
  }

  return {
    responseOutput: response,
  };
}

// ==============================================================================
// 4. Graph Construction & Compilation
// ==============================================================================
export const workflow = new StateGraph(AgentStateAnnotation)
  .addNode("classifier", classifierNode)
  .addNode("assessment", assessmentNode)
  .addNode("rag", ragNode)
  .addEdge(START, "classifier")
  .addConditionalEdges("classifier", (state) => {
    if (state.intent === "assessment") {
      return "assessment";
    }
    return "rag";
  })
  .addEdge("assessment", END)
  .addEdge("rag", END);

export const agentApp = workflow.compile();

/**
 * Convenience execution helper invoked by /api/chat or server actions.
 */
export async function runWellnessAgent(
  messages: ChatMessage[],
  userId: string = "anonymous"
): Promise<{ text: string; intent: AgentIntent }> {
  const result = await agentApp.invoke({
    messages,
    userId,
    intent: "casual_chat",
    assessmentProgress: {
      currentQuestionIndex: 0,
      answers: {},
      isComplete: false,
    },
    recommendedProgramId: null,
  });

  return {
    text: result.responseOutput || "Namaste. Let us honor your practice.",
    intent: result.intent,
  };
}
