# @four-bytes/four-opencode-git-tools

Git history analysis tools for opencode agents — curse scores, bus factor, implicit coupling, and ownership.

## Status

Wave P14, planned.

## Installation

```bash
bun install @four-bytes/four-opencode-git-tools
```

## Configuration

Add to `~/.config/opencode/opencode.json`:

```json
{
  "plugin": ["file:///home/user/four-opencode-git-tools/dist/four-opencode-git-tools.js"]
}
```

Restart opencode after adding.

## Tools

| Tool | Description |
|---|---|
| `curse_score` | Rank files by risk (changes × author chaos × recency × churn acceleration) |
| `bus_factor` | Ownership concentration per directory — find orphaned modules |
| `implicit_coupling` | Detect files that always change together — hidden dependencies |
| `ownership` | Line-level author breakdown per file/directory |
| `blast_radius` | Given a file, find everything that might break when you touch it |

## Development

```bash
bun install
bun run build
bun test
```

## License

Apache-2.0 — see [LICENSE](LICENSE)
