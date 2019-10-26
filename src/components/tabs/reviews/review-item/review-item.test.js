import React from "react";
import renderer from "react-test-renderer";
import ReviewItem from "./review-item";

describe(`ReviewItem`, () => {
  it(`renders correctly`, () => {
    const dom = <ReviewItem />;
    const component = renderer.create(dom);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
