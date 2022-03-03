import { useState } from "react";

const useApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavbar = () => {
    setIsOpen((curr) => !curr);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return { isOpen, handleNavbar, closeNavbar };
};

export default useApp;
