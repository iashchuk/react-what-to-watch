import React from "react";
import renderer from "react-test-renderer";
import Button from "./button";

describe(`Button`, () => {
  it(`renders correctly`, () => {
    const dom = <Button>Нажми меня</Button>;
    const component = renderer.create(dom);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`renders correctly with additional class`, () => {
    const dom = <Button className="section__button">Нажми меня</Button>;
    const component = renderer.create(dom);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
