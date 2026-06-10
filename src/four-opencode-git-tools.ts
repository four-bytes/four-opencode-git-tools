import type { Plugin } from "@opencode-ai/plugin";
import { tool, type ToolDefinition } from "@opencode-ai/plugin/tool";
import { logDebugEvent } from "./debug-logger";

// ── Tool: curse_score ──────────────────────────────────────
const curseScoreTool: ToolDefinition = tool({
  description: "Rank files by risk using curse score algorithm: changes × author chaos × recency × churn acceleration. Returns top N most dangerous files in the repo.",
  parameters: {
    top: { type: "number", description: "Number of files to return (default: 10)" },
    since: { type: "string", description: "Only consider commits since date (e.g., '90d', '6m', '2024-01-01')" },
  },
  async execute(_params, _ctx) {
    return "curse_score: not yet implemented";
  },
});

// ── Tool: bus_factor ───────────────────────────────────────
const busFactorTool: ToolDefinition = tool({
  description: "Calculate bus factor per directory — ownership concentration analysis. Identifies modules that would be orphaned if key contributors left.",
  parameters: {
    since: { type: "string", description: "Only consider commits since date" },
  },
  async execute(_params, _ctx) {
    return "bus_factor: not yet implemented";
  },
});

// ── Tool: implicit_coupling ────────────────────────────────
const implicitCouplingTool: ToolDefinition = tool({
  description: "Detect files that always change together in the same commit — hidden dependencies invisible in code. Returns co-commit pairs ranked by coupling strength.",
  parameters: {
    threshold: { type: "number", description: "Minimum co-commit rate to report (0.0-1.0, default: 0.8)" },
    since: { type: "string", description: "Only consider commits since date" },
  },
  async execute(_params, _ctx) {
    return "implicit_coupling: not yet implemented";
  },
});

// ── Tool: ownership ────────────────────────────────────────
const ownershipTool: ToolDefinition = tool({
  description: "Analyze who owns the lines alive in HEAD — per-file and per-directory author breakdown. Surfaces knowledge silos and onboarding targets.",
  parameters: {
    path: { type: "string", description: "File or directory path relative to repo root (default: entire repo)" },
  },
  async execute(_params, _ctx) {
    return "ownership: not yet implemented";
  },
});

// ── Tool: blast_radius ─────────────────────────────────────
const blastRadiusTool: ToolDefinition = tool({
  description: "Given a file, find everything that might break when you touch it — coupled files, shared authors, related modules.",
  parameters: {
    file: { type: "string", description: "File path relative to repo root to analyze" },
    since: { type: "string", description: "Only consider commits since date" },
  },
  async execute(_params, _ctx) {
    return "blast_radius: not yet implemented";
  },
});

// ── Plugin ─────────────────────────────────────────────────
const FourOpencodeGitTools: Plugin = async (_ctx) => {
  logDebugEvent("plugin.registered", { tools: 5 });
  return {
    tool: {
      curse_score: curseScoreTool,
      bus_factor: busFactorTool,
      implicit_coupling: implicitCouplingTool,
      ownership: ownershipTool,
      blast_radius: blastRadiusTool,
    },
  };
};

export default FourOpencodeGitTools;
