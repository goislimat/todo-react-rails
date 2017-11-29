import { CHANGE_VISIBILITY } from "./types";

export const changeVisibility = visibility => ({
  type: CHANGE_VISIBILITY,
  payload: visibility
});
