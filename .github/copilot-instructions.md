# AI Coding Instructions for Soc Ops Bingo

## Quick Start Checklist
- [ ] `npm install` (init dependencies)
- [ ] `npm run dev` (start dev server with hot reload)
- [ ] `npm test` (verify all tests pass)

---

## Project Overview

**Soc Ops**: Social bingo game for in-person mixers. 5×5 board with real-world attributes (e.g., "bikes to work"). Win detection triggers modal celebration.

**Stack**: React 19 + TypeScript + Vite + Tailwind CSS v4 + Vitest

---

## Architecture

### Game Logic (Pure Functions)
[`src/utils/bingoLogic.ts`](src/utils/bingoLogic.ts) — **Immutable, thoroughly tested functions only**
- `generateBoard()` → 5×5 with center free space, shuffled 24 questions
- `toggleSquare(board, id)` → Returns new board (never mutates)
- `checkBingo(board)` → Detects winning lines
- `getWinningSquareIds(board)` → Returns `Set<number>`

### State Management
[`src/hooks/useBingoGame.ts`](src/hooks/useBingoGame.ts) — Orchestrates state + localStorage persistence
- Versioned storage: must bump `STORAGE_VERSION` on data shape changes
- Validates board on restore: `validateStoredData()` type guard

### Components
```
App → StartScreen | GameScreen (BingoBoard → BingoSquare) | BingoModal | WelcomeTour
```
**Rule**: No localStorage calls in components. Event handlers prefixed with `on` (`onSquareClick`, `onReset`)

---

## Game Rules & Immutability

- **Free Space**: Index 12 (center) always marked, cannot toggle
- **Questions**: 24 unique items from [`src/data/questions.ts`](src/data/questions.ts) per board
- **Win**: 5 marked squares in row/column/diagonal
- **State**: Never mutate board directly—`map()` to create new array

```typescript
// ✅ Correct
const newBoard = board.map(sq => 
  sq.id === id ? { ...sq, isMarked: !sq.isMarked } : sq
);

// ❌ Wrong
board[id].isMarked = !board[id].isMarked;
```

---

## Types & Storage

- **Types**: [`src/types/index.ts`](src/types/index.ts) — `BingoSquareData`, `BingoLine`, `GameState`
- **localStorage**: Keys = `"tour-completed"` (boolean), `"bingo-game-state"` (versioned JSON)
- **Validation**: Type guards like `validateStoredData()` required on restore

---

## Styling & Testing

- **Tailwind v4** (integrated via `@tailwindcss/vite`): Grid = `grid-cols-5 gap-1 aspect-square`
- **Tests** ([`src/utils/bingoLogic.test.ts`](src/utils/bingoLogic.test.ts)): 220+ lines, vitest globals, mock `Math.random` for deterministic shuffles
- **Linting**: `npm run lint` (ESLint flat config, strict React hooks), `tsc -b` before build
- **Build**: `npm run build` → `dist/`, auto-deploys to GitHub Pages via base path env var

---

## Anti-Patterns

❌ Mutate board state directly  
❌ Call localStorage from components  
❌ Hardcode board dimensions (use `BOARD_SIZE`, `CENTER_INDEX`)  
❌ Skip validation on restored data
