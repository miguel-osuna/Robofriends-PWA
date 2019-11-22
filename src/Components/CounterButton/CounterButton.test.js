import "../../setupTests.js";
import { shallow } from "enzyme";
import React from "react";
import CounterButton from "./CounterButton.js";
import { jsxEmptyExpression } from "@babel/types";

it("Expect to render CounterButton component", () => {
  const mockColor = "red";
  expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});

it("Correctly increments the counter", () => {
  const mockColor = "red";
  const wrapper = shallow(<CounterButton color={mockColor} />);
  wrapper.setState({ count: 1 });
  wrapper.find("button").simulate("click");
  expect(wrapper.state("count")).toEqual(2);
  expect(wrapper.props().color).toEqual("red");
});
