# Claude Code Session Starter
> Reference this file at the start of every new chat for lean, high-quality sessions.

---

## Session Rules (Always Active)

- Read **only the files relevant to the task** — do not scan the whole codebase
- Write **complete, working solutions** — no placeholders, no TODOs unless asked
- **No explanations unless I ask** — code only by default
- **No bullet summaries** at the end of responses
- **No over-engineering** — simplest correct solution wins
- Test once, then stop — do not loop fix attempts more than twice without asking me
- If a step fails, **stop and report the full error** before attempting any fix
- Prefer **CLI tools** (gh, pnpm, docker) over verbose API calls

---

## Context Management

- After finishing each sub-task → run `/compact`
- When switching to unrelated work → run `/clear`
- For large refactors or multi-file changes → use **Plan Mode first** (Shift+Tab × 2)
- For codebase research → use a **subagent** so findings come back as a summary, not raw file dumps

---

## Model Selection

| Task | Model |
|---|---|
| Day-to-day: tests, edits, refactors | `sonnet` (default) |
| Complex: architecture, hard bugs | `opus` |
| Quick: renaming, formatting, lookups | `haiku` |

Switch with: `/model sonnet` or `/model opus`

---

## Prompt Habits

- Always give **exact file paths** — never say "fix the auth bug", say "fix token refresh in `src/auth/refresh.ts`"
- **Batch related asks** into one message — avoid follow-up chains
- Filter noisy output before Claude sees it:
  ```bash
  pnpm test 2>&1 | grep -A 5 -E "FAIL|ERROR|failed" | head -120
  ```
- Before `/compact`, tell Claude what to preserve:
  > "Before compacting: we're using optimistic locking for user updates, avoid schema changes this session."

---

## Files to Set Up Once (Do These Now If Missing)

- [ ] `CLAUDE.md` at project root — run `/init` to generate, then trim it to essentials only
- [ ] `.claudeignore` — add `node_modules`, build outputs, logs, assets Claude doesn't need
- [ ] Global `~/.claude/CLAUDE.md` — for preferences that apply across all projects (tone, format, editor style)

---

## Quick Command Reference

| Command | When to Use |
|---|---|
| `/compact` | After finishing a sub-task |
| `/clear` | Before switching to unrelated work |
| `/model sonnet` | Reset to default model |
| `/rewind` | Undo last action (double-tap Escape) |
| `/init` | Generate CLAUDE.md for current project |

---

*Keep this file short. Update it only when you discover a new habit that consistently saves tokens.*
