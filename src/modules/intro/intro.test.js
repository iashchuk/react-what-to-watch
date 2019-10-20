import React from "react";
import renderer from "react-test-renderer";
import Intro from "./intro.jsx";

describe(`Intro`, () => {
  it(`renders correctly`, () => {
    const component = renderer.create(<Intro />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
