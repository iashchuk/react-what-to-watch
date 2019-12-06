import React from "react";
import { string } from "prop-types";

const CardBackground = ({ src }) => {
  return (
    <div className="movie-card__bg">
      <img src={src} />
    </div>
  );
};

CardBackground.propTypes = {
  src: string
};

export default CardBackground;
