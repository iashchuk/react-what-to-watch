import React from "react";
import renderer from "react-test-renderer";
import MovieCardInfo from "./movie-card-info.jsx";

describe(`MovieCardInfo`, () => {
  it(`renders correctly`, () => {
    const dom = <MovieCardInfo />;
    const component = renderer.create(dom);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
