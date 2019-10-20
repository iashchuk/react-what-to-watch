import React from "react";
import renderer from "react-test-renderer";
import ShowMoreButton from "./show-more-button.jsx";

describe(`ShowMoreButton`, () => {
  it(`renders correctly`, () => {
    const component = renderer.create(<ShowMoreButton />).toJSON();
    expect(component).toMatchSnapshot();
  });
  it(`renders correctly with additional class`, () => {
    const component = renderer
      .create(<ShowMoreButton className="section__button" />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
