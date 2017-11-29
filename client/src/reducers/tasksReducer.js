import {
  FETCH_TASKS,
  ADD_TASK,
  CHANGE_STATUS,
  DELETE_TASK
} from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return action.payload;
    case ADD_TASK:
      return [...state, action.payload];
    case CHANGE_STATUS:
      return state.map(
        task => (task.id === action.payload.id ? action.payload : task)
      );
    case DELETE_TASK:
      return state.filter(task => task.id !== action.payload);
    default:
      return state;
  }
};
