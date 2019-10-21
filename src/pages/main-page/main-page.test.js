import React from "react";
import renderer from "react-test-renderer";
import MainPage from "./main-page.jsx";

describe(`MainPage`, () => {
  it(`renders correctly`, () => {
    const dom = <MainPage />;
    const component = renderer.create(dom);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
