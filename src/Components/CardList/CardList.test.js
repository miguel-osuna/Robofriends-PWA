import "../../setupTests.js";
import { shallow } from "enzyme";
import React from "react";
import CardList from "./CardList.js";

it("Testing CardList component with Enzyme", () => {
  const mockRobots = [
    {
      id: 1,
      name: "Miguel",
      email: "miguel@gmail.com",
      username: "miguel123"
    }
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
