import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card.jsx";

Enzyme.configure({ adapter: new Adapter() });

const cardData = {
  id: 1,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  imageSrc: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
};

describe(`MovieCard`, () => {
  it(`test handler click`, () => {
    const CARD_CLASSNAME = `.small-movie-card`;
    const onClick = jest.fn();

    const component = shallow(
        <MovieCard title={cardData.title} imageSrc={cardData.imageSrc} onClick={onClick} />
    );

    expect(component.find(CARD_CLASSNAME)).toHaveLength(1);
    component.simulate(`click`);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
