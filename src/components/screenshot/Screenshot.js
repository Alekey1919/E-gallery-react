import React from "react";

const Screenshot = React.forwardRef(({ game, src, openOverlay }, ref) => {
  return (
    <div className="screenshot" onClick={openOverlay}>
      <img src={src} alt={game} ref={ref} />
    </div>
  );
});

export default Screenshot;
