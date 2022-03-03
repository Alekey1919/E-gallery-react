import React from "react";
import useOverlay from "./useOverlay";
import leftArrow from "../../assets/leftArrow.svg";
import rightArrow from "../../assets/rightArrow.svg";
import Modal from "../modal/Modal";
import info from "../../assets/info.png";

function Overlay({ src, game, handleClose, prev, next }) {
  const { handleOnClick, isModalActive, openModal, closeModal } =
    useOverlay(handleClose);

  return (
    <div className="overlay" onClick={handleOnClick}>
      <img src={info} alt="Info" className="info" onClick={openModal} />
      {isModalActive && <Modal close={closeModal} game={game} />}
      <img
        src={leftArrow}
        alt="Previous Img"
        onClick={() => prev(src)}
        className="arrow"
      />
      <img src={src} alt={game} />
      <img
        src={rightArrow}
        alt="Next Img"
        onClick={() => next(src)}
        className="arrow"
      />
    </div>
  );
}

export default Overlay;
