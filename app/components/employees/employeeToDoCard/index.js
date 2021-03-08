import React, { PureComponent } from 'react';
import EmployeeToDoTask from '../employeeToDoTask';


export default class EmployeeToDoCard extends PureComponent {
    constructor(props) {
		super(props);
		this.state = {
			...this.props
		}
        console.log("In employee ToDo")    
        console.log(this.props)
        
	}

    componentWillMount() {
		console.log("Employee ToDo Card Componenet will Mount")
		// this.props.actions.fetchToDo(this.props.id);
		// this.setState({
		// 	employeeToDoData: this.props.employeeToDoData.todo
		// });
	}

    componentWillReceiveProps(nextProps) {
		console.log("nextProps")
		// console.log(nextProps)
		// if (nextProps.employeeToDoData !== undefined && nextProps.employeeToDoData !== this.props.employeeToDoData) {			
		// 	console.log("Employee ToDo Card componentWillReceiveProps")
		// 	this.setState({
		// 		ToDoData: nextProps.employeeToDoData.todo
		// 	});
		// }
	}

	render(){
		console.log("ToDo card render")
		console.log(this.state);
		console.log(this.props);
		console.log(this.props.id);
		const employeeToDoTask = this.state.todo.map(
			(item, i) => {
				console.log(item);
				return (<EmployeeToDoTask details={item} id={this.props.id} key={i} actions={this.props.actions}/>)
			}
		);

        return (
            <div>
                <div className="card-container">
					{employeeToDoTask}
				</div>
            </div>

        )
	}
	
}