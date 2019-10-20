import React from "react";
import renderer from "react-test-renderer";
import Footer from "./footer.jsx";

describe(`Footer`, () => {
  it(`renders correctly`, () => {
    const component = renderer.create(<Footer />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
