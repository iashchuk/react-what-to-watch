import React from "react";
import renderer from "react-test-renderer";

import Catalog from "./catalog.jsx";

import { data } from "../../api/mocks";

describe(`Catalog`, () => {
  it(`renders correctly`, () => {
    const dom = <Catalog movies={data} />;
    const component = renderer.create(dom);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
