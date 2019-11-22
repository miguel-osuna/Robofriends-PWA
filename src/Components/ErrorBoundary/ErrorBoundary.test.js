import "../../setupTests.js";
import { shallow } from "enzyme";
import React from "react";
import ErrorBoundary from "./ErrorBoundary.js";

it("Testing Card component with Enzyme", () => {
  expect(shallow(<ErrorBoundary />)).toMatchSnapshot();
});
