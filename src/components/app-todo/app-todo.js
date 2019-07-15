import React, { Component } from 'react'
import { connect } from 'react-redux'
import {createTask,deleteTask,setPriorityFilter,updateTask} from '../../actions/task-action'
import AppTodoAddTask from '../app-todo-addtask'


class  AppTodo extends Component {

  saveTask = (newTask) => {
      this.props.createTask(newTask);
  };

  render(){
      return (
          <div className="App">
            <h1 className="App-header">TODO List v2</h1>
            <div className="container-fluid">
              <div className="row content">
                <div className="col-sm-2">
                  ФИЛЬТР
                </div>
                <div className="col-sm-8 text-left">
                    <AppTodoAddTask saveTask={this.saveTask}/>
                  <div> СПИСОК ЗАДАЧ </div> 
                  <div>TASKS {console.log(this.props.tasks)}</div>
                </div>
              </div>
            </div>
          </div>
      );
  };
}

const mapStateToProps = (state) => ({
    tasks: state.task.task,
    priorityFilter: state.task.priorityFilter,
});


const mapActionToProps = ({
    createTask,updateTask,setPriorityFilter,deleteTask,
});

export default connect(mapStateToProps, mapActionToProps)(AppTodo);

