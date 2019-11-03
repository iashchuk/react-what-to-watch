import React from "react";
import renderer from "react-test-renderer";
import MoviesFilter from "./movies-filter.jsx";
import { GenresMap } from "../../api/transform/transformMovies";

describe(`MoviesFilter`, () => {
  it(`renders correctly`, () => {
    const dom = <MoviesFilter activeFilter={GenresMap.All} setActiveFilter={(f) => f} />;
    const component = renderer.create(dom);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
