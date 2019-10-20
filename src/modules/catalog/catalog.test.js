import React from "react";
import renderer from "react-test-renderer";
import Catalog from "./catalog.jsx";

describe(`Catalog`, () => {
  it(`renders correctly`, () => {
    const component = renderer.create(<Catalog />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
