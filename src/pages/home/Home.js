import React from "react";
import Screenshot from "../../components/screenshot/Screenshot";
import Overlay from "../../components/overlay/Overlay";
import useHome from "./useHome";

function Home() {
  const {
    homepage,
    isActive,
    selectedImage,
    selectedGame,
    closeOverlay,
    openOverlay,
    handlePrevImg,
    handleNextImg,
    addToRefs,
  } = useHome();

  return (
    <div className="home container">
      {isActive && (
        <Overlay
          src={selectedImage}
          game={selectedGame}
          handleClose={closeOverlay}
          prev={handlePrevImg}
          next={handleNextImg}
        />
      )}

      <div>
        <h1 className="home-h1">E-gallery</h1>
        <p className="home-p">The art of in-game photography</p>
        <div className="grid">
          {homepage.map((screenshot, key) => {
            return (
              <Screenshot
                src={screenshot.src}
                game={screenshot.game}
                key={key}
                openOverlay={() => openOverlay(screenshot.src, screenshot.game)}
                ref={addToRefs}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
