import type { BingoSquareData } from '../types';
import { BingoSquare } from './BingoSquare';

interface BingoBoardProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  onSquareClick: (squareId: number) => void;
}

export function BingoBoard({ board, winningSquareIds, onSquareClick }: BingoBoardProps) {
  return (
    <div className="rounded-leafy p-6 bg-[--leafy-gradient] shadow-leafy border-4 border-moss/60 relative overflow-visible">
      {/* Decorative leaf in corner */}
      <img src="/src/assets/leaf.svg" alt="Leaf" className="absolute -top-6 -left-6 w-10 opacity-30 pointer-events-none" />
      <div className="grid grid-cols-5 gap-3 w-full max-w-md aspect-square">
        {board.map((square) => (
          <BingoSquare
            key={square.id}
            square={square}
            isWinning={winningSquareIds.has(square.id)}
            onClick={() => onSquareClick(square.id)}
          />
        ))}
      </div>
    </div>
  );
}
