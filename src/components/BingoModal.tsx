interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-hidden">
      {/* Animated leaf confetti */}
      <img src="/src/assets/confetti-leaf.svg" alt="Confetti" className="absolute left-10 top-8 w-14 animate-confetti" style={{zIndex:2}} />
      <img src="/src/assets/confetti-leaf.svg" alt="Confetti" className="absolute right-10 top-16 w-10 animate-confetti" style={{zIndex:2, animationDelay:'0.2s'}} />
      <img src="/src/assets/confetti-leaf.svg" alt="Confetti" className="absolute left-1/2 top-4 w-12 animate-confetti" style={{zIndex:2, animationDelay:'0.4s', transform:'translateX(-50%)'}} />

      <div className="bg-[--leafy-gradient] rounded-leafy p-8 max-w-xs w-full text-center shadow-leafy scale-in-glow border-2 border-moss relative z-10">
        {/* Layered leafy glow */}
        <div className="absolute inset-0 rounded-leafy bg-moss-gradient blur-xl -z-10 opacity-40"></div>

        <div className="flex flex-col items-center mb-6">
          <img src="/src/assets/sprout.svg" alt="Sprout" className="w-14 mb-2 animate-bounce" />
          <h2 className="font-leafy text-4xl font-bold text-leaf-dark drop-shadow-lg mb-1">
            BINGO!
          </h2>
        </div>

        <p className="text-leaf-green font-leafy font-medium drop-shadow-md mb-8 text-lg">
          You completed a line!
        </p>

        <button
          onClick={onDismiss}
          className="w-full bg-leaf-green hover:bg-leaf-dark text-white font-leafy font-bold py-3 px-6 rounded-leafy active:scale-95 transition-all duration-200 shadow-leafy hover:shadow-lg drop-shadow-md flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sunlight focus-visible:ring-offset-2 focus-visible:ring-offset-moss"
          aria-label="Keep Playing"
        >
          <img src="/src/assets/leaf.svg" alt="" aria-hidden="true" className="w-6 h-6" />
          Keep Playing
        </button>
      </div>
    </div>
  );
}
