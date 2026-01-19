import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full bg-linear-to-br from-purple-100 via-pink-100 to-blue-100">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-linear-to-r from-white/60 via-purple-50/40 to-blue-50/40 backdrop-blur-sm border-b border-white/30 shadow-sm">
        <button
          onClick={onReset}
          className="text-purple-700 hover:text-purple-900 text-sm px-4 py-2 rounded-lg active:scale-95 transition-all duration-150 hover:bg-white/30 font-medium"
        >
          ← Back
        </button>
        <h1 className="heading-poppins font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-600">Soc Ops</h1>
        <div className="w-16"></div>
      </header>

      {/* Instructions */}
      <p className="text-center text-purple-700 text-sm py-3 px-4 font-medium">
        Tap a square when you find someone who matches it.
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
        <div className="bg-linear-to-r from-green-200 to-emerald-200 text-green-900 text-center py-3 font-bold text-sm shadow-md border-b-2 border-green-400">
          🎉 BINGO! You got a line!
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-4">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
