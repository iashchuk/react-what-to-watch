import React from "react";
import renderer from "react-test-renderer";
import MovieCardBackground from "./movie-card-background.jsx";

describe(`MovieCardBackground`, () => {
  it(`renders correctly`, () => {
    const component = renderer.create(<MovieCardBackground />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
