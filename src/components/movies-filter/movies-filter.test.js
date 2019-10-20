import React from "react";
import renderer from "react-test-renderer";
import MoviesFilter from "./movies-filter.jsx";

describe(`MoviesFilter`, () => {
  it(`renders correctly`, () => {
    const component = renderer.create(<MoviesFilter />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
