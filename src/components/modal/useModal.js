import { useState, useEffect } from "react";
import modalData from "../../data/modalData";

const useModal = (gameName, close) => {
  const [info, setInfo] = useState();

  const handleClick = (e) => {
    if (e.target.classList[0] === "modal-container") close();
  };

  useEffect(() => {
    setInfo(modalData.filter((game) => game.id === gameName)[0]);
  }, []);

  return { info, handleClick };
};

export default useModal;
