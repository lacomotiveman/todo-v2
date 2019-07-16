import React, { Component } from 'react';
import TodoListItem from '../todo-list-item';

class TodoList extends Component {
  render () {
    return (
      <div className="panel-heading">
        TODO:
        <ul className="list-group">
          {
            this.props.list.map((task, index) => {
              return( 
                <TodoListItem 
                    key={task.id}
                    task={task}
                    finishTask={this.props.finishTask}
                    deleteTask={this.props.deleteTask}
                    editTask={this.props.editTask}
                />
              );
            })
          }
        </ul>
      </div>
    )
  }
}

export default TodoList;
