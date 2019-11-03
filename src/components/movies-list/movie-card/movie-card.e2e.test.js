import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card";

Enzyme.configure({ adapter: new Adapter() });

const cardData = {
  id: 1,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  trailer: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
};

describe(`MovieCard`, () => {
  it(`test handler click`, () => {
    const CARD_CLASSNAME = `.small-movie-card`;
    const onClick = jest.fn();

    const dom = (
      <MovieCard
        title={cardData.title}
        poster={cardData.poster}
        trailer={cardData.trailer}
        onClick={onClick}
      />
    );

    const component = shallow(dom);
    expect(component.find(CARD_CLASSNAME)).toHaveLength(1);

    component.simulate(`click`);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
