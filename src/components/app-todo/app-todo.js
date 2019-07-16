import React, { Component } from 'react'
import { connect } from 'react-redux'
import {createTask,deleteTask,setPriorityFilter,updateTask, finishTask} from '../../actions/task-action'
import AppTodoAddTask from '../app-todo-addtask';
import TodoList from '../todo-list';
import TodoFilter from '../todo-filter';

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

  onPriorityFilterChange = (value) => {
      this.props.setPriorityFilter(value);
  };

  render(){

      let filteredTasks;
      switch(this.props.priorityFilter){

        case('normal'):{
          filteredTasks = this.props.tasks.filter( item => item.priority==='normal' );
          break;
        }
        case('medium'):{
          filteredTasks = this.props.tasks.filter( item => item.priority==='medium' );
          break;
        }
        case('high'):{
          filteredTasks = this.props.tasks.filter( item => item.priority==='high' );
          break;
        }

        default:{
          filteredTasks = this.props.tasks;
        }

      };

      return (
          <div className="App">
            <h1 className="App-header">TODO List v2</h1>
            <div className="container-fluid">
              <div className="row content">
                <div className="col-sm-2">
                  <TodoFilter
                    selectPriority = {this.props.priorityFilter}
                    onPriorityFilterChange = {this.onPriorityFilterChange}
                  />
                </div>
                <div className="col-sm-8 text-left">
                    <AppTodoAddTask saveTask={this.saveTask}/>
                    <TodoList 
                      list={filteredTasks}
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

