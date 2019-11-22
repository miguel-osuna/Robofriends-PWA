import "../../setupTests.js";
import { shallow } from "enzyme";
import React from "react";
import MainPage from "./MainPage.js";

let wrapper;
beforeEach(() => {
  const mockProps = {
    searchField: "",
    robots: [],
    isPending: false,
    error: "",
    onRequestRobots: jest.fn(),
    onSearchChange: jest.fn()
  };

  wrapper = shallow(<MainPage {...mockProps} />);
});

it("Renders MainPage without crashing", () => {
  expect(wrapper).toMatchSnapshot();
});

it("Filters robots correctly", () => {
  expect(wrapper.instance().filterRobots()).toEqual([]);
});

it("Filters array of robots with 'miguel'", () => {
  const mockProps2 = {
    searchField: "miguel",
    robots: [
      {
        key: 1,
        id: 1,
        name: "John",
        email: "john@gmail.com",
        username: "john123"
      }
    ],
    isPending: false,
    error: "",
    onRequestRobots: jest.fn(),
    onSearchChange: jest.fn()
  };

  const wrapper2 = shallow(<MainPage {...mockProps2} />);
  expect(wrapper2.instance().filterRobots()).toEqual([]);
});

it("Filters array of robots with 'john'", () => {
  const mockProps3 = {
    searchField: "j",
    robots: [
      {
        key: 1,
        id: 1,
        name: "John",
        email: "john@gmail.com",
        username: "john123"
      }
    ],
    isPending: false,
    error: "",
    onRequestRobots: jest.fn(),
    onSearchChange: jest.fn()
  };

  const wrapper3 = shallow(<MainPage {...mockProps3} />);
  expect(
    wrapper3.instance().filterRobots([
      {
        key: 1,
        id: 1,
        name: "Miguel",
        email: "john@gmail.com",
        username: "john123"
      }
    ])
  );
});

it("Test isPending value equal to true", () => {
  const mockProps4 = {
    searchField: "",
    robots: [],
    isPending: true,
    error: "",
    onRequestRobots: jest.fn(),
    onSearchChange: jest.fn()
  };

  const wrapper4 = shallow(<MainPage {...mockProps4} />);
  expect(wrapper4.instance().props.isPending).toEqual(true);
  expect(wrapper4.contains(<h1 className="tc"> Loading, please wait</h1>)).toBe(
    true
  );
});

it("Test isPending value equal to false", () => {
  const mockProps4 = {
    searchField: "",
    robots: [],
    isPending: false,
    error: "",
    onRequestRobots: jest.fn(),
    onSearchChange: jest.fn()
  };

  const wrapper4 = shallow(<MainPage {...mockProps4} />);
  expect(wrapper4.instance().props.isPending).toEqual(false);
  expect(
    wrapper4.contains(<h1 className="tc"> Loading, please wait</h1>)
  ).not.toBe(true);
});
