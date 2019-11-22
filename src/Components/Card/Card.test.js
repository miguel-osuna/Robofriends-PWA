import "../../setupTests.js";
import { shallow } from "enzyme";
import React from "react";
import Card from "./Card.js";

it("Testing Card component with Enzyme", () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
