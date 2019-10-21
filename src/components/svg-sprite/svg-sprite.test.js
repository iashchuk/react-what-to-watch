import React from "react";
import renderer from "react-test-renderer";
import SvgSprite from "./svg-sprite.jsx";

describe(`SvgSprite`, () => {
  it(`renders correctly`, () => {
    const dom = <SvgSprite />;
    const component = renderer.create(dom);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
