import React from "react";
import renderer from "react-test-renderer";
import CardBackground from "./card-background";

describe(`CardBackground`, () => {
  it(`renders correctly`, () => {
    const dom = <CardBackground />;
    const component = renderer.create(dom);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
