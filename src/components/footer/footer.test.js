import React from "react";
import renderer from "react-test-renderer";
import Footer from "./footer.jsx";

describe(`Footer`, () => {
  it(`renders correctly`, () => {
    const dom = <Footer />;
    const component = renderer.create(dom);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
