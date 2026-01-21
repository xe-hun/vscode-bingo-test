import { useState } from "react";

const TOUR_STEPS = [
  {
    title: "Welcome to Soc Ops! ",
    description: "Social Bingo - The perfect game for in-person mixers and networking events.",
  },
  {
    title: "How It Works",
    description: "Match people with the questions on your card. Find 5 in a row (horizontally, vertically, or diagonally) to win!",
  },
  {
    title: "Customizable Questions",
    description: "Edit the questions in src/data/questions.ts to match your event theme.",
  },
  {
    title: "Tech Stack",
    description: "Built with React, TypeScript, Tailwind CSS v4, and Vite for lightning-fast development.",
  },
];

export function WelcomeTour() {
  const [step, setStep] = useState(0);
  const [completed, setCompleted] = useState(false);

  const currentStep = TOUR_STEPS[step];
  const isLast = step === TOUR_STEPS.length - 1;

  const handleNext = () => {
    if (isLast) {
      setCompleted(true);
      localStorage.setItem("tour-completed", "true");
    } else {
      setStep(step + 1);
    }
  };

  const handleSkip = () => {
    setCompleted(true);
    localStorage.setItem("tour-completed", "true");
  };

  if (completed) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-300 overflow-hidden">
      {/* Playful floating leaves */}
      <img src="/src/assets/leaf.svg" alt="Leaf" className="absolute left-10 top-8 w-10 opacity-30 animate-breeze" style={{zIndex:2}} />
      <img src="/src/assets/sprout.svg" alt="Sprout" className="absolute right-10 top-16 w-10 opacity-20 animate-bounce" style={{zIndex:2}} />

      <div className="bg-moss-gradient rounded-leafy p-8 max-w-md mx-4 shadow-leafy border-2 border-moss scale-in-glow relative z-10">
        <div className="space-y-6">
          <div className="space-y-3 flex flex-col items-center">
            <img src={step % 2 === 0 ? "/src/assets/leaf.svg" : "/src/assets/sprout.svg"} alt="Leafy step" className="w-10 mb-2" />
            <h2 className="font-leafy text-3xl font-bold text-leaf-dark drop-shadow-md">{currentStep.title}</h2>
            <p className="text-leaf-green text-lg leading-relaxed font-leafy font-medium drop-shadow-sm">
              {currentStep.description}
            </p>
          </div>

          {/* Leaf trail progress bar */}
          <div className="flex items-center justify-between pt-4">
            <div className="flex gap-2">
              {TOUR_STEPS.map((_, index) => (
                <img
                  key={index}
                  src={index === step ? "/src/assets/leaf.svg" : index < step ? "/src/assets/sprout.svg" : "/src/assets/leaf.svg"}
                  alt={index === step ? "Current step" : index < step ? "Completed step" : "Upcoming step"}
                  className={`transition-all duration-300 ${
                    index === step
                      ? "w-7 h-7 opacity-100 drop-shadow"
                      : index < step
                        ? "w-5 h-5 opacity-70"
                        : "w-4 h-4 opacity-40"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              onClick={handleSkip}
              className="px-4 py-2 text-leaf-dark hover:text-leaf-green transition-colors text-sm font-leafy font-medium active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sunlight focus-visible:ring-offset-2 focus-visible:ring-offset-moss"
              aria-label="Skip tour"
            >
              Skip
            </button>
            <button
              onClick={handleNext}
              className="ml-auto px-6 py-2 bg-leaf-green hover:bg-leaf-dark text-white rounded-leafy transition-all duration-200 font-leafy font-bold shadow-leafy hover:shadow-lg active:scale-95 drop-shadow-md flex items-center gap-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sunlight focus-visible:ring-offset-2 focus-visible:ring-offset-moss"
              aria-label={isLast ? "Start Playing" : "Next"}
            >
              <img src="/src/assets/leaf.svg" alt="" aria-hidden="true" className="w-5 h-5" />
              {isLast ? "Start Playing" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
