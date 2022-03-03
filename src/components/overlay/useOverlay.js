import { useState } from "react";

const useOverlay = (handleClose) => {
  const [isModalActive, setIsModalActive] = useState(false);

  const handleOnClick = (e) => {
    if (e.target.classList[0] === "overlay") {
      handleClose();
    }
  };

  const openModal = () => {
    setIsModalActive(true);
  };

  const closeModal = () => {
    setIsModalActive(false);
  };

  return { handleOnClick, isModalActive, openModal, closeModal };
};

export default useOverlay;
