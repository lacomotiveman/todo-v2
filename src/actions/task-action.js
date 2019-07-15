import {CREATE_TASK, UPDATE_TASK, DELETE_TASK, PRIORITY_FILTER_SET} from './index'

export const createTask = (payload) => {
  return {
    type: CREATE_TASK,
    payload
  };
};

export const updateTask = (payload) => {
  return {
    type: UPDATE_TASK,
    payload
  };
};

export const deleteTask = (payload) => {
  return {
    type: DELETE_TASK,
    payload // ID TASK
  };
};

export const setPriorityFilter = (payload) => {
  return {
    type: PRIORITY_FILTER_SET,
    payload 
  };
};
