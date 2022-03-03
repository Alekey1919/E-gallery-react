import Axios from "axios";
import { useState, useEffect, useRef } from "react";
import homepage from "../../data/homepage";

const useHome = () => {
  const [isActive, setIsActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState();
  const [selectedGame, setSelectedGame] = useState();
  const refs = useRef([]);

  const closeOverlay = () => {
    setIsActive(false);
  };

  const openOverlay = (src, game) => {
    setIsActive(true);
    setSelectedGame(game);
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
    Axios.get("https://e-gallery-eipiai.herokuapp.com/wake-up")
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  }, []);

  return {
    homepage,
    isActive,
    selectedImage,
    selectedGame,
    closeOverlay,
    openOverlay,
    handlePrevImg,
    handleNextImg,
    addToRefs,
  };
};

export default useHome;
