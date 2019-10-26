import React from "react";
import renderer from "react-test-renderer";
import CardManage from "./card-manage";

describe(`CardManage`, () => {
  it(`renders correctly`, () => {
    const dom = <CardManage />;
    const component = renderer.create(dom);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
