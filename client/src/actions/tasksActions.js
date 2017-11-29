import axios from "axios";
import { FETCH_TASKS, ADD_TASK, CHANGE_STATUS, DELETE_TASK } from "./types";

export const fetchTasks = () => async dispatch => {
  const res = await axios.get("/api/tasks");

  dispatch({
    type: FETCH_TASKS,
    payload: res.data
  });
};

export const addTask = name => async dispatch => {
  const task = {
    name,
    status: "UNDONE"
  };

  const res = await axios.post("/api/tasks", { task });

  dispatch({
    type: ADD_TASK,
    payload: res.data
  });
};

export const changeStatus = id => async dispatch => {
  const res = await axios.patch(`/api/tasks/${id}`);

  dispatch({
    type: CHANGE_STATUS,
    payload: res.data
  });
};

export const deleteTask = id => async dispatch => {
  await axios.delete(`/api/tasks/${id}`);

  dispatch({
    type: DELETE_TASK,
    payload: id
  });
};
