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
    <div className="relative flex flex-col min-h-full bg-moss-gradient overflow-hidden">
      {/* Leafy border accents */}
      <img src="/src/assets/leaf.svg" alt="Leaf" className="absolute left-0 top-0 w-16 opacity-40 animate-breeze" style={{zIndex:1}} />
      <img src="/src/assets/leaf.svg" alt="Leaf" className="absolute right-0 bottom-0 w-20 rotate-45 opacity-30 animate-breeze" style={{zIndex:1}} />

      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-white/70 backdrop-blur-sm border-b border-moss shadow-moss relative z-10 rounded-b-leafy mx-2 mt-2">
        <button
          onClick={onReset}
          className="flex items-center gap-1 text-fern hover:text-leaf-dark text-sm px-4 py-2 rounded-leafy active:scale-95 transition-all duration-150 hover:bg-moss/30 font-leafy font-medium shadow-moss"
        >
          <img src="/src/assets/leaf.svg" alt="Back" className="w-5 h-5" />
          Back
        </button>
        <h1 className="font-leafy font-bold text-leaf-dark text-2xl flex items-center gap-2">
          <img src="/src/assets/sprout.svg" alt="Sprout" className="w-7 h-7" />
          Your Bingo Board
        </h1>
        <div className="w-16"></div>
      </header>

      {/* Instructions */}
      <p className="text-center text-fern text-sm py-3 px-4 font-leafy font-medium">
        Tap a square when you find someone who matches it.
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
        <div className="bg-sunlight text-bark text-center py-3 font-bold text-sm shadow-leafy border-b-2 border-leaf-green rounded-leafy mx-4 animate-bounce">
          <img src="/src/assets/confetti-leaf.svg" alt="Confetti" className="inline w-6 h-6 mr-2 align-middle animate-confetti" />
          BINGO! You got a line!
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
