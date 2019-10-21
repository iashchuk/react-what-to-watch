import React from "react";
import renderer from "react-test-renderer";
import PlusButton from "./plus-button.jsx";

describe(`PlusButton`, () => {
  it(`renders correctly`, () => {
    const dom = <PlusButton />;
    const component = renderer.create(dom);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`renders correctly with additional class`, () => {
    const dom = <PlusButton className="section__button" />;
    const component = renderer.create(dom);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
