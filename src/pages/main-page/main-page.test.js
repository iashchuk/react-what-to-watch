import React from "react";
import renderer from "react-test-renderer";
import { Context, options } from "../../app";
import MainPage from "./main-page.jsx";

describe(`MainPage`, () => {
  it(`renders correctly`, () => {
    const dom = (
      <Context.Provider value={options}>
        <MainPage />
      </Context.Provider>
    );
    const component = renderer.create(dom);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
