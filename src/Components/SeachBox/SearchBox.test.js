import "../../setupTests.js";
import { shallow } from "enzyme";
import React from "react";
import SearchBox from "./SearchBox.js";

it("Testing SearchBox component with Enzyme", () => {
  const mockFunction = () => {
    console.log("Test in SearchBox");
  };
  expect(shallow(<SearchBox searchChange={mockFunction} />)).toMatchSnapshot();
});
