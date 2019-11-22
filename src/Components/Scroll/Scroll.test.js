import "../../setupTests.js";
import { shallow } from "enzyme";
import React from "react";
import Scroll from "./Scroll.js";

it("Testing SearchBox component with Enzyme", () => {
  expect(shallow(<Scroll />)).toMatchSnapshot();
});
