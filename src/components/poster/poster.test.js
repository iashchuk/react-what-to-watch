import React from "react";
import renderer from "react-test-renderer";
import Poster from "./poster.jsx";

describe(`Poster`, () => {
  it(`renders correctly`, () => {
    const component = renderer.create(<Poster />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
