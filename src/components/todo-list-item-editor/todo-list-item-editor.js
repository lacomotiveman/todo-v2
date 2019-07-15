import React, { Component } from 'react';



class TodoListItemEditor extends Component {
  state = {
    id:     this.props.task.id,
    title:  this.props.task.title,
    description:  this.props.task.description,
    date_deadline: this.props.task.date_deadline,
    priority : this.props.task.priority,
  };
  

  editClick = () => {
    let editedObj = {
      id:this.state.id,
      title:this.state.title,
      description:this.state.description,
      date_deadline: this.state.date_deadline,
      priority:this.state.priority
    }
    this.props.handleHideEditor();
    this.props.editTask(editedObj);
  };

  render() {

    return (
      <div>
          <p className={'col-sm-8'}>
            <input value={this.state.title}
                   onChange={()=>{
                        this.setState({title:document.getElementById('txtTitleText'+this.state.id).value});
                      }
                    }
                   id={'txtTitleText'+this.state.id}
                   className={'form-control'}/>
        </p>
        <p className={'col-sm-8'}>
            <input value={this.state.description}
                   onChange={()=>{this.setState({description:document.getElementById('txtDescription'+this.state.id).value})}}
                   id={'txtDescription'+this.state.id}
                   className={'form-control'}/>
        </p>
        <p className={'col-sm-8'}>
            <input value={this.state.date_deadline}
                   onChange={()=>{this.setState({date_deadline:document.getElementById('txtDeadline'+this.state.id).value})}}
                   id={'txtDeadline'+this.state.id}
                   className={'form-control'}
                   type="date"/>
        </p>
        <p className={'col-sm-8'}>
            <select id={"selPrioritytemp"+this.state.id}
                    onChange={()=>this.setState({priority:document.getElementById('selPrioritytemp'+this.state.id).value})}
                    className={'form-control'} defaultValue="normal">
              <option value={'high'} >High</option>
              <option value={'medium'} >Medium</option>
              <option value={'normal'} >Normal</option>
            </select>
        </p>
        <button className={'btn btn-warning'} onClick={()=>{this.editClick()}}>Edit</button>
      </div>
    );
  }
}

export default TodoListItemEditor;


