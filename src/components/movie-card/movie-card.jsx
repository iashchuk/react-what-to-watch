import React from "react";
import { string, func } from "prop-types";
import cx from "classnames";

const MovieCard = ({ className, title, imageSrc, onClick }) => {
  return (
    <article className={cx(`small-movie-card`, className)} onClick={onClick}>
      <div className="small-movie-card__image">
        <img src={imageSrc} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">
          {title}
        </a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  className: string,
  title: string.isRequired,
  imageSrc: string.isRequired,
  onClick: func
};

export default MovieCard;
