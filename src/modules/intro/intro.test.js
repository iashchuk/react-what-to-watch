import React from "react";
import renderer from "react-test-renderer";
import Intro from "./intro.jsx";

describe(`Intro`, () => {
  it(`renders correctly`, () => {
    const dom = <Intro />;
    const component = renderer.create(dom);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
