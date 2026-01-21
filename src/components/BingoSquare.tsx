import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {


  // Base classes for all squares
  const baseClasses = 'relative flex items-center justify-center p-2 text-center rounded-leafy transition-all duration-200 select-none min-h-[70px] text-xs leading-tight font-leafy font-medium cursor-pointer overflow-hidden shadow-moss';

  let stateClasses = '';

  if (square.isFreeSpace) {
    // Free space: golden leaf, special effect
    stateClasses = 'bg-gradient-to-br from-sunlight to-leaf-light text-bark font-bold text-sm shadow-leafy opacity-95 border-2 border-leaf-green scale-105';
  } else if (square.isMarked && isWinning) {
    // Winning marked: deep green, sprout icon, no animation
    stateClasses = 'bg-leaf-green text-white font-bold shadow-leafy border-2 border-sunlight scale-105';
  } else if (square.isMarked) {
    // Marked: leafy green, check icon, gentle pulse
    stateClasses = 'bg-leaf-light text-leaf-dark font-bold shadow-leafy border-2 border-leaf-green animate-gentle-pulse';
  } else {
    // Unmarked: solid, high-contrast background for maximum legibility
    stateClasses = `bg-leaf-dark text-white border-2 border-sunlight hover:shadow-leafy hover:scale-105 active:scale-95 animate-none`;
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
      className={`${baseClasses} ${stateClasses} focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sunlight focus-visible:ring-offset-2 focus-visible:ring-offset-moss`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
      style={{ position: 'relative' }}
      tabIndex={square.isFreeSpace ? -1 : 0}
      role="button"
    >
      {/* Leaf watermark for unmarked squares */}
      {!square.isMarked && !square.isFreeSpace && (
        <img src="/src/assets/leaf.svg" alt="Leaf watermark" className="absolute opacity-10 w-10 h-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none" />
      )}
      {/* Golden leaf for free space */}
      {square.isFreeSpace && (
        <img src="/src/assets/leaf.svg" alt="Golden leaf" className="absolute opacity-60 w-10 h-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none" style={{ filter: 'drop-shadow(0 0 8px #ffe066)' }} />
      )}
      {/* Sprout for winning marked */}
      {square.isMarked && isWinning && !square.isFreeSpace && (
        <img src="/src/assets/sprout.svg" alt="Sprout" className="absolute top-1 right-1 w-5 h-5 animate-bounce" />
      )}
      {/* Check for marked */}
      {square.isMarked && !isWinning && !square.isFreeSpace && (
        <span className="absolute top-1 right-1 text-leaf-dark text-lg font-bold drop-shadow animate-gentle-pulse">✓</span>
      )}
      <span className="wrap-break-word hyphens-auto drop-shadow-sm z-10 relative">
        {square.isFreeSpace ? 'Free Space' : square.text}
      </span>
    </button>
  );
}
