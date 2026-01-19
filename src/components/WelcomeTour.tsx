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
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-300">
      <div className="bg-linear-to-br from-purple-300 via-pink-200 to-purple-400 rounded-3xl p-8 max-w-md mx-4 shadow-2xl border border-white/50 scale-in-glow">
        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="heading-poppins text-3xl font-bold text-white drop-shadow-md">{currentStep.title}</h2>
            <p className="text-white/95 text-lg leading-relaxed font-medium drop-shadow-sm">
              {currentStep.description}
            </p>
          </div>

          <div className="flex items-center justify-between pt-4">
            <div className="flex gap-2">
              {TOUR_STEPS.map((_, index) => (
                <div
                  key={index}
                  className={`rounded-full transition-all duration-300 ${
                    index === step
                      ? "bg-white w-6 h-2.5 shadow-md"
                      : index < step
                        ? "bg-green-300 w-2.5 h-2.5"
                        : "bg-white/50 w-2.5 h-2.5"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              onClick={handleSkip}
              className="px-4 py-2 text-white/80 hover:text-white transition-colors text-sm font-medium active:scale-95"
            >
              Skip
            </button>
            <button
              onClick={handleNext}
              className="ml-auto px-6 py-2 bg-linear-to-r from-emerald-300 to-green-400 hover:from-emerald-400 hover:to-green-500 text-white rounded-lg transition-all duration-200 font-bold shadow-lg hover:shadow-xl active:scale-95 drop-shadow-md"
            >
              {isLast ? "Start Playing" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
