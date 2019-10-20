import React from "react";
import renderer from "react-test-renderer";
import Button from "./button.jsx";

describe(`Button`, () => {
  it(`renders correctly`, () => {
    const component = renderer.create(<Button>Нажми меня</Button>).toJSON();
    expect(component).toMatchSnapshot();
  });
  it(`renders correctly with additional class`, () => {
    const component = renderer
      .create(<Button className="section__button">Нажми меня</Button>)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
