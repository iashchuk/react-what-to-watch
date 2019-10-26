import React from "react";
import renderer from "react-test-renderer";
import Reviews from "./reviews";

describe(`Reviews`, () => {
  it(`renders correctly`, () => {
    const dom = <Reviews />;
    const component = renderer.create(dom);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
