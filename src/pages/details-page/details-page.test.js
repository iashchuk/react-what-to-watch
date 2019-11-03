import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import DetailsPage from "./details-page.jsx";

describe(`DetailsPage`, () => {
  it(`renders correctly`, () => {
    const dom = (
      <Provider store={store}>
        <DetailsPage />
      </Provider>
    );
    const component = renderer.create(dom);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
