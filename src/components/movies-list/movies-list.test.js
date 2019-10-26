import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./movies-list";

import { data } from "../../api/mocks";

describe(`MoviesList`, () => {
  it(`renders correctly`, () => {
    const dom = <MoviesList movies={data} />;
    const component = renderer.create(dom);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
