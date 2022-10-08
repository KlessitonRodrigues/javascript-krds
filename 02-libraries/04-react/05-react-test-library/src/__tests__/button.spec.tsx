import React from "react";
import renderer from "react-test-renderer";
import Button from "../button/index";

describe("button test", () => {
  it("Should render correctly ", () => {
    const component = renderer
      .create(<Button text="test" onClick={() => {}} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
