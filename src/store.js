// Redux Methods
import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import thunkMiddleware from "redux-thunk";

// Reducers
import { searchRobots, requestRobots } from "./Reducers/reducers";

// const store = createStore(combineReducers(searchRobots), {});
const store = createStore(
  combineReducers({ searchRobots, requestRobots }),
  applyMiddleware(thunk, thunkMiddleware)
);

export default store;
