import React from "react";
import renderer from "react-test-renderer";
import Catalog from "./catalog.jsx";

describe(`Catalog`, () => {
  it(`renders correctly`, () => {
    const dom = <Catalog />;
    const component = renderer.create(dom);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
