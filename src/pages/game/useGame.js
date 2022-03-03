import Axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

const useGame = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [screenshots, setScreenshots] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState();
  const refs = useRef([]);
  const { game } = useParams();

  const closeOverlay = () => {
    setIsActive(false);
    document.body.style.overflow = "unset";
  };

  const openOverlay = (src) => {
    document.body.style.overflow = "hidden";
    setIsActive(true);
    setSelectedImage(src);
  };

  const handlePrevImg = (src) => {
    let selectedIndex;
    for (let ref in refs.current) {
      if (refs.current[ref].src === src) {
        ref = parseInt(ref);
        selectedIndex = ref === 0 ? refs.current.length - 1 : ref - 1;
      }
    }
    setSelectedImage(refs.current[selectedIndex].src);
  };

  const handleNextImg = (src) => {
    let selectedIndex;
    for (let ref in refs.current) {
      if (refs.current[ref].src === src) {
        ref = parseInt(ref);
        selectedIndex = refs.current.length - 1 === ref ? 0 : ref + 1;
      }
    }
    setSelectedImage(refs.current[selectedIndex].src);
  };

  const addToRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    refs.current = [];
    Axios.get(`https://e-gallery-eipiai.herokuapp.com/get-screenshots/${game}`)
      .then((res) => {
        setScreenshots(res.data.length > 0 ? res.data : "unavailable-game");
        setTimeout(() => {
          setIsLoading(false);
        }, 200);
      })
      .catch((err) => console.error("Something happened :(", err));
  }, [game]);

  return {
    game,
    screenshots,
    isActive,
    isLoading,
    selectedImage,
    closeOverlay,
    openOverlay,
    handlePrevImg,
    handleNextImg,
    addToRefs,
  };
};

export default useGame;
