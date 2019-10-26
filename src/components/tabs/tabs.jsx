import React, { useState } from "react";
import cx from "classnames";

import Details from "./details/details";
import Overview from "./overview/overview";
import Reviews from "./reviews/reviews";
import { capitalize } from "../../helpers/capitalize";

const TabsItems = {
  OVERVIEW: `overview`,
  DETAILS: `details`,
  REVIEWS: `reviews`
};

const Tabs = () => {
  const [current, setCurrent] = useState(TabsItems.OVERVIEW);

  const handleTabClick = (evt, tab) => {
    evt.preventDefault();
    setCurrent(tab);
  };

  const getContent = (name) => {
    switch (name) {
      case TabsItems.OVERVIEW:
        return <Overview />;

      case TabsItems.DETAILS:
        return <Details />;

      case TabsItems.REVIEWS:
        return <Reviews />;

      default:
        return null;
    }
  };

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {Object.values(TabsItems).map((item, index) => (
            <li
              key={index}
              className={cx(`movie-nav__item`, {
                [`movie-nav__item--active`]: current === item
              })}
            >
              <a
                href="#"
                className="movie-nav__link"
                onClick={(evt) => handleTabClick(evt, item)}
              >
                {capitalize(item)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {getContent(current)}
    </div>
  );
};

export default Tabs;