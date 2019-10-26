import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs";

describe(`Tabs`, () => {
  it(`renders correctly`, () => {
    const dom = <Tabs />;
    const component = renderer.create(dom);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
