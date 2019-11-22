import "../setupTests.js";
import { shallow } from "enzyme";
import React from "react";

import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "../constants.js";

import * as reducers from "./reducers.js";

describe("Search robots", () => {
  const initialState = {
    searchField: ""
  };

  it("Should return initial state", () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: "" });
  });

  it("Should handle CHANGE_SEARCH_FIELD action", () => {
    const mockAction = {
      type: CHANGE_SEARCH_FIELD,
      payload: "text"
    };
    const mockState = { ...initialState, searchField: mockAction.payload };

    expect(reducers.searchRobots(initialState, mockAction)).toEqual(mockState);
  });
});

describe("Request robots", () => {
  const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ""
  };

  it("Should return initial state robots", () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it("Should handle REQUEST_ROBOTS_PENDING action", () => {
    const mockAction = { type: REQUEST_ROBOTS_PENDING };
    const mockStateRobots = {
      ...initialStateRobots,
      isPending: true
    };
    expect(reducers.requestRobots(initialStateRobots, mockAction)).toEqual(
      mockStateRobots
    );
  });

  it("Should handle REQUEST_ROBOTS_SUCCESS action", () => {
    const mockAction = {
      type: REQUEST_ROBOTS_SUCCESS,
      payload: [
        {
          id: 1,
          name: "Miguel",
          email: "miguel@gmail.com",
          username: "miguel123"
        }
      ]
    };
    const mockStateRobots = {
      ...initialStateRobots,
      isPending: false,
      robots: mockAction.payload
    };
    expect(reducers.requestRobots(initialStateRobots, mockAction)).toEqual(
      mockStateRobots
    );
  });

  it("Should handle REQUEST_ROBOTS_FAILED action", () => {
    const mockAction = {
      type: REQUEST_ROBOTS_FAILED,
      payload: "Request failed"
    };
    const mockStateRobots = {
      ...initialStateRobots,
      isPending: false,
      error: mockAction.payload
    };
    expect(reducers.requestRobots(initialStateRobots, mockAction)).toEqual(
      mockStateRobots
    );
  });
});
