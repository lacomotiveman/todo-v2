import React, { Component } from 'react'
import { connect } from 'react-redux'
import {createTask,deleteTask,setPriorityFilter,updateTask, finishTask} from '../../actions/task-action'
import AppTodoAddTask from '../app-todo-addtask';
import TodoList from '../todo-list';

class  AppTodo extends Component {

  saveTask = (newTask) => {
      this.props.createTask(newTask);
  };

  deleteTask = (id) => {
      this.props.deleteTask(id);
  };

  editTask = (editedTask) => {
      this.props.updateTask(editedTask);
  }

  finishTask = (id) => {
      this.props.finishTask(id);
  }



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
                    <TodoList 
                      list={this.props.tasks}
                      finishTask={this.finishTask}
                      editTask={this.editTask}
                      deleteTask={this.deleteTask}
                    /> 
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
    createTask,
    updateTask,
    setPriorityFilter,
    deleteTask,
    finishTask
});

export default connect(mapStateToProps, mapActionToProps)(AppTodo);

