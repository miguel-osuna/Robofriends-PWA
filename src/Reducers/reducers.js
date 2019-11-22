import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "../constants.js";

const initialStateSearch = {
  searchField: ""
};

export const searchRobots = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      state = { ...state, searchField: action.payload };
      break;
    default:
  }
  return state;
};

const initialStateRobots = {
  isPending: false,
  robots: [],
  error: ""
};

export const requestRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      state = { ...state, isPending: true };
      break;
    case REQUEST_ROBOTS_SUCCESS:
      state = { ...state, isPending: false, robots: action.payload };
      break;
    case REQUEST_ROBOTS_FAILED:
      state = { ...state, isPending: false, error: action.payload };
      break;
    default:
  }
  return state;
};
