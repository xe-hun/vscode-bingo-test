interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-linear-to-br from-purple-300 via-pink-200 to-purple-400 rounded-3xl p-8 max-w-xs w-full text-center shadow-2xl scale-in-glow border border-white/50">
        {/* Layered glow effects */}
        <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-purple-400/20 to-pink-300/20 blur-xl -z-10"></div>
        
        <div className="text-6xl mb-6 animate-gentle-pulse">🎉</div>
        
        <h2 className="heading-poppins text-4xl font-bold text-white drop-shadow-lg mb-2">
          BINGO!
        </h2>
        
        <p className="text-white font-medium drop-shadow-md mb-8 text-lg">
          You completed a line!
        </p>
        
        <button
          onClick={onDismiss}
          className="w-full bg-linear-to-r from-emerald-300 to-green-400 hover:from-emerald-400 hover:to-green-500 text-white font-bold py-3 px-6 rounded-xl active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl drop-shadow-md"
        >
          Keep Playing
        </button>
      </div>
    </div>
  );
}
