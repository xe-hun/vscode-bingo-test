import { useMemo } from "react";
import { useBingoGame } from "./hooks/useBingoGame";
import { StartScreen } from "./components/StartScreen";
import { GameScreen } from "./components/GameScreen";
import { BingoModal } from "./components/BingoModal";
import { WelcomeTour } from "./components/WelcomeTour";

function App() {
  const {
    gameState,
    board,
    winningSquareIds,
    showBingoModal,
    startGame,
    handleSquareClick,
    resetGame,
    dismissModal,
  } = useBingoGame();

  const showTour = useMemo(() => {
    if (typeof window === "undefined") return false;
    const tourCompleted = localStorage.getItem("tour-completed");
    return !tourCompleted;
  }, []);

  if (gameState === "start") {
    return (
      <>
        <StartScreen onStart={startGame} />
        {showTour && <WelcomeTour />}
      </>
    );
  }

  return (
    <>
      <GameScreen
        board={board}
        winningSquareIds={winningSquareIds}
        hasBingo={gameState === "bingo"}
        onSquareClick={handleSquareClick}
        onReset={resetGame}
      />
      {showBingoModal && <BingoModal onDismiss={dismissModal} />}
    </>
  );
}

export default App;
