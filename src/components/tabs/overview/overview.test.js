import React from "react";
import renderer from "react-test-renderer";
import Overview from "./overview";

describe(`Overview`, () => {
  it(`renders correctly`, () => {
    const dom = <Overview />;
    const component = renderer.create(dom);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
