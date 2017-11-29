import { combineReducers } from "redux";
import tasks from "./tasksReducer";
import filter from "./filterReducer";

export default combineReducers({
  tasks,
  filter
});
