import React from "react";
import useGame from "./useGame";
import Screenshot from "../../components/screenshot/Screenshot";
import home from "../../assets/home.png";
import { Link } from "react-router-dom";
import Overlay from "../../components/overlay/Overlay";
import loading from "../../assets/loading.svg";

function Game() {
  const {
    game,
    screenshots,
    isActive,
    isLoading,
    handleNextImg,
    handlePrevImg,
    closeOverlay,
    openOverlay,
    selectedImage,
    addToRefs,
  } = useGame();

  if (screenshots === "unavailable-game") {
    return (
      <div className="game container">
        <h1 className="game-h1">I haven't played that game :/</h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="game container">
        <img src={loading} alt="Loading" className="loading" />
      </div>
    );
  }
  return (
    <div className="game container">
      {isActive && (
        <Overlay
          src={selectedImage}
          handleClose={closeOverlay}
          game={game}
          prev={handlePrevImg}
          next={handleNextImg}
        />
      )}

      <Link to="/" className="home">
        <img src={home} alt="Home" />
      </Link>
      <h1 className="game-h1">
        {game
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")}
      </h1>
      <div className="grid">
        {screenshots.map((screenshot, key) => {
          return (
            <Screenshot
              name={game}
              src={screenshot.src}
              openOverlay={() => openOverlay(screenshot.src, key)}
              ref={addToRefs}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Game;
