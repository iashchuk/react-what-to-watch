import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import MainPage from "./main-page.jsx";

describe(`MainPage`, () => {
  it(`renders correctly`, () => {
    const dom = (
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
    const component = renderer.create(dom);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
