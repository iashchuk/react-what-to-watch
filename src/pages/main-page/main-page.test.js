import React from "react";
import renderer from "react-test-renderer";
import MainPage from "./main-page.jsx";

describe(`MainPage`, () => {
  it(`renders correctly`, () => {
    const component = renderer.create(<MainPage />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
