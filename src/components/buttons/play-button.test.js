import React from "react";
import renderer from "react-test-renderer";
import PlayButton from "./play-button.jsx";

describe(`PlayButton`, () => {
  it(`renders correctly`, () => {
    const dom = <PlayButton />;
    const component = renderer.create(dom);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`renders correctly with additional class`, () => {
    const dom = <PlayButton className="section__button" />;
    const component = renderer.create(dom);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
