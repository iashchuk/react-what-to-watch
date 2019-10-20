import React from "react";
import renderer from "react-test-renderer";
import PlayButton from "./play-button.jsx";

describe(`PlayButton`, () => {
  it(`renders correctly`, () => {
    const component = renderer.create(<PlayButton />).toJSON();
    expect(component).toMatchSnapshot();
  });
  it(`renders correctly with additional class`, () => {
    const component = renderer
      .create(<PlayButton className="section__button" />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
