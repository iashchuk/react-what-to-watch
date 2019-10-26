import React from "react";
import renderer from "react-test-renderer";
import { Context, options } from "../../app";
import DetailsPage from "./details-page.jsx";

describe(`DetailsPage`, () => {
  it(`renders correctly`, () => {
    const dom = (
      <Context.Provider value={options}>
        <DetailsPage />
      </Context.Provider>
    );
    const component = renderer.create(dom);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
