import { CHANGE_VISIBILITY } from "../actions/types";

export default (state = "ALL", action) => {
  switch (action.type) {
    case CHANGE_VISIBILITY:
      return action.payload;
    default:
      return state;
  }
};
