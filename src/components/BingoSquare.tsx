import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  // Cycle through 4 bubble gradients based on square position
  const gradientIndex = square.id % 4;
  const gradients = ['bubble-gradient-1', 'bubble-gradient-2', 'bubble-gradient-3', 'bubble-gradient-4'];
  const glowClasses = ['bubble-glow-1', 'bubble-glow-2', 'bubble-glow-3', 'bubble-glow-4'];
  const currentGradient = gradients[gradientIndex];
  const currentGlow = glowClasses[gradientIndex];

  // Handle different states for styling
  const baseClasses = 'relative flex items-center justify-center p-2 text-center rounded-xl transition-all duration-200 select-none min-h-[70px] text-xs leading-tight font-medium cursor-pointer';

  let stateClasses = '';
  
  if (square.isFreeSpace) {
    // Free space styling - special bubble with glow
    stateClasses = `${currentGradient} ${currentGlow} text-white font-bold text-sm shadow-lg opacity-90`;
  } else if (square.isMarked && isWinning) {
    // Winning marked state - bright green with intense glow
    stateClasses = 'bg-gradient-to-br from-emerald-200 to-green-400 text-white font-bold shadow-lg marked-glow scale-100';
  } else if (square.isMarked) {
    // Marked state (non-winning) - bright green with glow
    stateClasses = 'bg-gradient-to-br from-emerald-200 to-green-400 text-white font-bold shadow-lg marked-glow';
  } else {
    // Unmarked state - gradient bubble with glow and hover effects
    stateClasses = `${currentGradient} ${currentGlow} text-white hover:shadow-2xl hover:scale-105 active:scale-95`;
  }

  const handleClick = () => {
    if (!square.isFreeSpace) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto drop-shadow-sm">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-1 right-1 text-white text-sm font-bold drop-shadow-md animate-gentle-pulse">✓</span>
      )}
    </button>
  );
}
