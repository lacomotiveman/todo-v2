import { combineReducers } from 'redux';
import TaskReducer from './task-reducer';

const rootReducer = combineReducers({
  task: TaskReducer,
})

export default rootReducer;
