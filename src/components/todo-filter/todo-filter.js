import React, { Component } from 'react';

class TodoFilter extends Component{

	onChange=()=>{
		this.props.onPriorityFilterChange(document.getElementById('PriFilter').value);
	}

	render(){
		return(
			<div className="row">
				<p> Priority Filter </p>
				
				<select id = {'PriFilter'} onChange = { this.onChange }>
					
					<option 
						value={'all'} 
						defaultValue={(this.props.selectedPriority === '')}
						>All
					</option>

					<option 
						value={'high'} 
						defaultValue={(this.props.selectedPriority === 'high')}
						>High
					</option>
					
					<option 
						value={'medium'}
						defaultValue={(this.props.selectedPriority === 'medium')}
						>Medium
					</option>
					
					<option 
						value={'normal'}
						defaultValue={(this.props.selectedPriority === 'normal')}
						>Normal
					</option>
				
				</select>
			</div>
		);
	}
}

export default TodoFilter;