import React from "react";
import useModal from "./useModal";

function Modal({ close, game }) {
  const { info, handleClick } = useModal(game, close);

  return (
    <div className="modal-container" onClick={handleClick}>
      <div className="modal-body">
        <h1>{info?.name}</h1>
        <div className="modal-main">
          <img src={info?.img} alt="Img" className="modal-img" />
          <div className="modal-info">
            <ul>
              <li>
                <span>Release Date:</span> {info?.releaseDate}
              </li>
            </ul>
            <ul>
              <li>
                <span>Developer:</span> {info?.developer}
              </li>
            </ul>
            <ul>
              <li>
                <span>Publisher:</span> {info?.publisher}
              </li>
            </ul>
            <ul>
              <li>
                <span>Genres:</span> {info?.genres}
              </li>
            </ul>
          </div>
        </div>
        <div className="modal-btns">
          <button onClick={close}>Close</button>
          <button>
            <a href={info?.storeLink} target="_blank">
              Steam Store
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
