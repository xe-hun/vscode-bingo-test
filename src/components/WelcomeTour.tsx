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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-in fade-in duration-300">
      <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 rounded-2xl p-8 max-w-md mx-4 shadow-2xl border border-purple-400/30 animate-in scale-in-95 duration-300">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-white">{currentStep.title}</h2>
            <p className="text-purple-100 text-lg leading-relaxed">
              {currentStep.description}
            </p>
          </div>

          <div className="flex items-center justify-between pt-4">
            <div className="flex gap-1">
              {TOUR_STEPS.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === step
                      ? "bg-white w-6"
                      : index < step
                        ? "bg-purple-300 w-2"
                        : "bg-purple-600 w-2"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              onClick={handleSkip}
              className="px-4 py-2 text-purple-200 hover:text-white transition-colors text-sm font-medium"
            >
              Skip
            </button>
            <button
              onClick={handleNext}
              className="ml-auto px-6 py-2 bg-white text-purple-900 rounded-lg hover:bg-purple-50 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl active:scale-95"
            >
              {isLast ? "Start Playing" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
