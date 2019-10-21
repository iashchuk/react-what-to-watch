import React from "react";
import renderer from "react-test-renderer";
import MoviesFilter from "./movies-filter.jsx";

describe(`MoviesFilter`, () => {
  it(`renders correctly`, () => {
    const dom = <MoviesFilter />;
    const component = renderer.create(dom);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
