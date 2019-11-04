import React from "react";
import renderer from "react-test-renderer";
import SimilarMovies from "./similar-movies.jsx";

import { data } from "../../api/mocks";

describe(`SimilarMovies`, () => {
  it(`renders correctly`, () => {
    const dom = <SimilarMovies movies={data} />;
    const component = renderer.create(dom);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
