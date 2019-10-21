import React from "react";
import renderer from "react-test-renderer";
import ShowMoreButton from "./show-more-button.jsx";

describe(`ShowMoreButton`, () => {
  it(`renders correctly`, () => {
    const dom = <ShowMoreButton />;
    const component = renderer.create(dom);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`renders correctly with additional class`, () => {
    const dom = <ShowMoreButton className="section__button" />;
    const component = renderer.create(dom);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
