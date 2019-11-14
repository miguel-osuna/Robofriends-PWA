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
  is_pending: false,
  robots: [],
  error: ""
};

export const requestRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      state = { ...state, is_pending: true };
      break;
    case REQUEST_ROBOTS_SUCCESS:
      state = { ...state, is_pending: false, robots: action.payload };
      break;
    case REQUEST_ROBOTS_FAILED:
      state = { ...state, is_pending: false, error: action.payload };
      break;
    default:
  }
  return state;
};
