import React, { Component } from 'react';
import TodoListItemEditor from '../todo-list-item-editor';


class TodoListItem extends Component {

    state={
        showEditor : false,
    }

    handleHideEditor = () => {
        this.setState({ showEditor: false });
    }

    delete = (id) => {
        this.props.deleteTask(id)
    }

    finish = (id) => {
        this.props.finishTask(id)
    }

    render() {
        
        const {id,title,description,priority,date_deadline,date_finish} = this.props.task;
        const btnFinish = date_finish===undefined ? <button className={'btn btn-outline-primary'} onClick={()=>{this.finish(id)}}>FINISH</button> : null;
        const btnEdit = date_finish===undefined ? <button className={'btn btn-outline-warning'} onClick={()=>{this.setState({ showEditor: true })}}>EDIT</button> : null ;
        const itemEditor = this.state.showEditor ? <TodoListItemEditor showEditor={this.state.showEditor} task={this.props.task} editTask={this.props.editTask}  handleHideEditor={this.handleHideEditor} /> : null;
        
        // подсветка просроченных задач
        const d = new Date().toISOString().slice(0,10);
        //const d_task = new Date();
        let highLightClassName;
        if(date_deadline.length===0){
            highLightClassName = null;
        }else{
            highLightClassName= date_deadline <= d ? "alert alert-dark" : null;
        }

        return (
                <li className={'list-group-item '+ highLightClassName}>
                    {title} | {description} | {priority} | {date_deadline} | {date_finish}
                    {btnFinish}
                    {btnEdit}
                    <button className={'btn btn-outline-danger'} onClick={()=>{this.delete(id)}}> X </button>
                    {itemEditor}
                </li>
        );
    }
}

export default TodoListItem;


