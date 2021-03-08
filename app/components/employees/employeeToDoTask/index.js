import React, { PureComponent } from 'react';
import _ from 'lodash';

export default class EmployeeToDoTask extends PureComponent {
    constructor(props) {
		super(props);
		this.state = {
			...this.props
		}		
		this.handleToDoDelete = this.handleToDoDelete.bind(this);
        this.handleInput = this.handleInput.bind(this);
	}

    handleInput(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    
    handleToDoDelete(event){
        this.props.actions.deleteToDo(this.props.id, this.props.details.todoid)
    }

	render(){
		let item = this.props.details;
		return(
			<div className={this.props.cardClass, "container-fluid"} >				
				<div className="row">
					<div className="col-xs-10">
                        <input type="text"  placeholder="task" value={item.desc} onChange={this.handleInput} key="{item.todoid}"/>
					</div>
					<div className="col-xs-2">
                        <button type="button" className="close" aria-label="Close" onClick={this.handleToDoDelete}>					
                            <span aria-hidden="true">&times;</span>						
                        </button>
					</div>
				</div>
			</div>
		)
	}
}