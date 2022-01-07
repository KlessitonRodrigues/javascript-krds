import React from "react";
import renderer from "react-test-renderer";
import Counter from "../counter/index";

describe("button test", () => {
  it("Should render correctly ", () => {
    const component = renderer.create(<Counter startFrom={0} />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
