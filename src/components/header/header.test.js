import React from "react";
import renderer from "react-test-renderer";
import Header from "./header.jsx";

describe(`Header`, () => {
  it(`renders correctly`, () => {
    const dom = <Header />;
    const component = renderer.create(dom);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
