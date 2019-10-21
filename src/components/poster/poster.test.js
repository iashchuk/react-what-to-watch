import React from "react";
import renderer from "react-test-renderer";
import Poster from "./poster.jsx";

describe(`Poster`, () => {
  it(`renders correctly`, () => {
    const dom = <Poster />;
    const component = renderer.create(dom);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
