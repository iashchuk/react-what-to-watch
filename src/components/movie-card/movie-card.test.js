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
    const dom = <MovieCard title={cardData.title} imageSrc={cardData.imageSrc} />;

    const component = renderer.create(dom);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`renders correctly with added class`, () => {
    const dom = (
      <MovieCard
        className="catalog__card"
        title={cardData.title}
        imageSrc={cardData.imageSrc}
      />
    );

    const component = renderer.create(dom);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
