import React from "react";
import renderer from "react-test-renderer";
import MovieCardBackground from "./movie-card-background.jsx";

describe(`MovieCardBackground`, () => {
  it(`renders correctly`, () => {
    const dom = <MovieCardBackground />;
    const component = renderer.create(dom);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
