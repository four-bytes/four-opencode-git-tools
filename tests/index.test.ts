import { describe, test, expect } from "bun:test";

describe("four-opencode-git-tools", () => {
  test("plugin module loads", async () => {
    const plugin = await import("../src/four-opencode-git-tools");
    expect(plugin.default).toBeDefined();
  });

  test("registers 5 tools", async () => {
    const plugin = await import("../src/four-opencode-git-tools");
    const hooks = await plugin.default({});
    const toolNames = Object.keys(hooks.tool || {});
    expect(toolNames).toContain("curse_score");
    expect(toolNames).toContain("bus_factor");
    expect(toolNames).toContain("implicit_coupling");
    expect(toolNames).toContain("ownership");
    expect(toolNames).toContain("blast_radius");
  });
});
