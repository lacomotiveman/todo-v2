import React, { Component } from 'react'

class TodoList extends Component {
  render () {
    return (
      <div className="panel-heading">
        ДЕЛА:
        <ul>
          <li>Дело1 </li>
          <li>Дело2 </li>
          <li>Дело3 </li>
          <li>Дело4 </li>
        </ul>
      </div>
    )
  }
}

export default TodoList
