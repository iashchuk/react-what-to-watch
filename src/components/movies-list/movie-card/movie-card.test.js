import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card.jsx";

const cardData = {
  id: 1,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  trailer: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
};

describe(`MovieCard`, () => {
  it(`renders correctly`, () => {
    const dom = (
      <MovieCard
        title={cardData.title}
        poster={cardData.poster}
        trailer={cardData.trailer}
      />
    );

    const component = renderer.create(dom, { createNodeMock: () => ({}) });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`renders correctly with added class`, () => {
    const dom = (
      <MovieCard
        className="catalog__card"
        title={cardData.title}
        poster={cardData.poster}
        trailer={cardData.trailer}
      />
    );

    const component = renderer.create(dom, { createNodeMock: () => ({}) });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
