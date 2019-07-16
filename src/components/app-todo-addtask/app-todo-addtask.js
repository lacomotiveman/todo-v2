import React, { Component } from 'react';

class AppTodoAddTask extends Component {
  saveTask = () => {
    let newTaskObj = {
      id:new Date().valueOf(),
      title:document.getElementById('txtTitle').value,
      description:document.getElementById('txtDesc').value,
      date_deadline:document.getElementById('txtDeadline').value,
      priority:document.getElementById('selPriority').value,
    }
    this.props.saveTask(newTaskObj);
    document.getElementById('txtTitle').value='';
    document.getElementById('txtDesc').value='';
   	document.getElementById('txtDeadline').value='';
    document.getElementById('selPriority').value='normal';
  }

  render() {
    return (

      <div className={'panel panel-default'} >
        <div className="panel-body">
          <div className={"form-group"}>
            <div className={"col-sm-12"}>
              <input className={'form-control'} id='txtTitle' placeholder={'Title'} type={'text'} />
              <input className={'form-control'} id='txtDesc' placeholder={'Description'} type={'text'} />
              <input className={'form-control'} id='txtDeadline' placeholder={'Выполнить до'} type={'datetime-local'} />
              <select id={"selPriority"} className={'form-control'}>
                <option value={'high'}>High</option>
                <option value={'medium'}>Medium</option>
                <option value={'normal'}>Normal</option>
              </select>
            </div>
            <div className={"col-sm-2"}>
              <button className={'btn btn-info'} onClick={()=>{this.saveTask()}}>Add Task</button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default AppTodoAddTask;