import React from "react";
import renderer from "react-test-renderer";
import { Context, options } from "../../app";
import Catalog from "./catalog.jsx";

describe(`Catalog`, () => {
  it(`renders correctly`, () => {
    const dom = (
      <Context.Provider value={options}>
        <Catalog />
      </Context.Provider>
    );
    const component = renderer.create(dom);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
