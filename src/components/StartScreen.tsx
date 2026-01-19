interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 bg-linear-to-br from-pink-200 via-purple-200 to-blue-200">
      {/* Animated gradient overlay for depth */}
      <div className="absolute inset-0 bg-linear-to-t from-blue-300/10 to-transparent pointer-events-none"></div>
      
      <div className="relative z-10 text-center max-w-sm">
        <h1 className="heading-poppins text-5xl md:text-6xl text-white drop-shadow-lg mb-2">
          Soc Ops
        </h1>
        <p className="heading-poppins text-xl md:text-2xl text-white/90 drop-shadow-md mb-8">
          Social Bingo
        </p>
        
        <div className="bg-linear-to-br from-white/90 to-purple-100/80 rounded-2xl p-8 shadow-xl backdrop-blur-sm border border-white/50 mb-8">
          <h2 className="heading-poppins font-bold text-purple-800 mb-4 text-lg">How to play</h2>
          <ul className="text-left text-purple-700 text-sm space-y-3">
            <li className="flex items-start">
              <span className="mr-3 text-lg">🎯</span>
              <span>Find people who match the questions</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-lg">✓</span>
              <span>Tap a square when you find a match</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-lg">🎉</span>
              <span>Get 5 in a row to win!</span>
            </li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-linear-to-r from-purple-500 via-pink-500 to-purple-600 hover:from-purple-600 hover:via-pink-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-2xl text-lg active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 drop-shadow-md"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
