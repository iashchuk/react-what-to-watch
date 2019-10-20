import React from "react";
import renderer from "react-test-renderer";
import PlusButton from "./plus-button.jsx";

describe(`PlusButton`, () => {
  it(`renders correctly`, () => {
    const component = renderer.create(<PlusButton />).toJSON();
    expect(component).toMatchSnapshot();
  });
  it(`renders correctly with additional class`, () => {
    const component = renderer
      .create(<PlusButton className="section__button" />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
