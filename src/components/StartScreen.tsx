interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-full p-6 bg-[--leafy-gradient] overflow-hidden">
      {/* Floating leaf SVGs for parallax effect */}
      <img src="/src/assets/leaf.svg" alt="Leaf" className="absolute left-8 top-8 w-16 animate-breeze opacity-60" style={{zIndex:1}} />
      <img src="/src/assets/leaf.svg" alt="Leaf" className="absolute right-12 bottom-12 w-20 rotate-45 animate-breeze opacity-40" style={{zIndex:1}} />
      <img src="/src/assets/sprout.svg" alt="Sprout" className="absolute left-1/2 top-0 w-12 -translate-x-1/2 animate-breeze opacity-50" style={{zIndex:1}} />

      <div className="relative z-10 text-center max-w-sm">
        {/* Organic logo with leaf cluster */}
        <div className="flex flex-col items-center mb-2">
          <img src="/src/assets/leaf.svg" alt="Leaf cluster" className="w-14 mb-1 drop-shadow" />
          <h1 className="font-leafy text-5xl md:text-6xl text-leaf-dark drop-shadow mb-1 tracking-tight">Soc Ops</h1>
        </div>
        <p className="font-leafy text-xl md:text-2xl text-leaf-green drop-shadow mb-8 tracking-wide">
          Social Bingo
        </p>

        <div className="bg-white/90 rounded-leafy p-8 shadow-leafy backdrop-blur-sm border border-moss mb-8">
          <h2 className="font-leafy font-bold text-leaf-green mb-4 text-lg">How to play</h2>
          <ul className="text-left text-fern text-sm space-y-3">
            <li className="flex items-start">
              <img src="/src/assets/leaf.svg" alt="Leaf" className="mr-3 w-5 h-5 inline-block" />
              <span>Find people who match the questions</span>
            </li>
            <li className="flex items-start">
              <img src="/src/assets/sprout.svg" alt="Sprout" className="mr-3 w-5 h-5 inline-block" />
              <span>Tap a square when you find a match</span>
            </li>
            <li className="flex items-start">
              <img src="/src/assets/confetti-leaf.svg" alt="Confetti" className="mr-3 w-5 h-5 inline-block" />
              <span>Get 5 in a row to win!</span>
            </li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-leaf-green hover:bg-leaf-dark text-white font-leafy font-bold py-4 px-8 rounded-leafy text-lg active:scale-95 transition-all duration-200 shadow-leafy hover:shadow-lg hover:scale-105 drop-shadow-md flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sunlight focus-visible:ring-offset-2 focus-visible:ring-offset-moss"
          aria-label="Start Game"
        >
          <img src="/src/assets/leaf.svg" alt="" aria-hidden="true" className="w-6 h-6" />
          Start Game
        </button>
      </div>
    </div>
  );
}
