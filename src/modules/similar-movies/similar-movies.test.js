import React from "react";
import renderer from "react-test-renderer";
import { Context, options } from "../../app";
import SimilarMovies from "./similar-movies.jsx";

describe(`SimilarMovies`, () => {
  it(`renders correctly`, () => {
    const dom = (
      <Context.Provider value={options}>
        <SimilarMovies />
      </Context.Provider>
    );
    const component = renderer.create(dom);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
