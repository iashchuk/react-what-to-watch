import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card.jsx";

const cardData = {
  id: 1,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  imageSrc: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
};

describe(`MovieCard`, () => {
  it(`renders correctly`, () => {
    const component = renderer
      .create(<MovieCard title={cardData.title} imageSrc={cardData.imageSrc} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
  it(`renders correctly with added class`, () => {
    const component = renderer
      .create(
          <MovieCard
            className="catalog__card"
            title={cardData.title}
            imageSrc={cardData.imageSrc}
          />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
