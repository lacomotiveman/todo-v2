import { CREATE_TASK, UPDATE_TASK, PRIORITY_FILTER_SET, DELETE_TASK } from '../actions/index';

/*

 TASK FORMAT: 

{
    id: '123', 
    title: 'title', 
    description: 'description', 
    priority: 'high', 
    date_deadline: '123481824', 
    date_finish: '17801431395',
}

*/

// TODO Priority и их фильтр в числовом формате ?

const INITIAL_STATE = {
  task: [],
  priorityFilter:'',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case CREATE_TASK: {
      return {
        ...state,
        task:[...state.task, action.payload]
      };
    }
    
    case UPDATE_TASK: {
      return {
        ...state,
        task: state.task.map(item => {
          if (item.id === action.payload.id) {
            return action.payload
          } else {
            return item
          };
        })
      };
    }
    
    case DELETE_TASK: {
      return {
        ...state,
        task: state.task.filter(item => action.payload !== item.id)
      };
    }


    case PRIORITY_FILTER_SET: {
      return {
        ...state,
        priorityFilter: action.payload
      };
    };

    default:
      return state;
  };
};
