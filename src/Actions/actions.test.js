import "../setupTests.js";
import { shallow } from "enzyme";
import React from "react";

import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "../constants.js";
import * as actions from "./actions.js";

import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

const mockStore = configureMockStore([thunkMiddleware]);

describe("Set search field", () => {
  it("Returns an action", () => {
    const mockText = "This is a test";
    const mockReturn = {
      type: CHANGE_SEARCH_FIELD,
      payload: mockText
    };
    expect(actions.setSearchField(mockText)).toEqual(mockReturn);
  });
});

describe("Request robots", () => {
  it("Dispatches REQUEST_ROBOTS_PENDING", () => {});
  it("Dispatches REQUEST_ROBOTS_SUCCESS", () => {});
  it("Dispatches REQUEST_ROBOTS_FAILED", () => {});
});
