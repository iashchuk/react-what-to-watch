import React from "react";
import renderer from "react-test-renderer";
import MovieCardInfo from "./movie-card-info.jsx";

describe(`MovieCardInfo`, () => {
  it(`renders correctly`, () => {
    const component = renderer.create(<MovieCardInfo />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
