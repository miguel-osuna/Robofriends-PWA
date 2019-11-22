import "../../setupTests.js";
import { shallow } from "enzyme";
import React from "react";
import Header from "./Header.js";

let wrapper;
beforeEach = () => {
  wrapper = shallow(<Header />);
};
it("Renders Header without crashing", () => {
  expect(wrapper).toMatchSnapshot();
});

it("Checks shouldUpdateComponent to be false", () => {
  const shouldUpdate = shallow(<Header />)
    .instance()
    .shouldComponentUpdate();
  expect(shouldUpdate).toBe(false);
});
