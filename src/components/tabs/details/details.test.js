import React from "react";
import renderer from "react-test-renderer";
import Details from "./details";

describe(`Details`, () => {
  it(`renders correctly`, () => {
    const dom = <Details />;
    const component = renderer.create(dom);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
