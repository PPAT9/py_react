import React, { PureComponent } from 'react';
import { Button, ButtonToolbar, Modal } from 'react-bootstrap';

import EmployeeDetails from '../employeeDetails';
import EmployeeDetailsUpdate from '../employeeDetailsUpdate';
import EmployeeCardDetails from '../employeeCardDetails';
import EmployeeToDoCard from '../employeeToDoCard';

export default class EmployeeCard extends PureComponent {

	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			showViewModal: false,
			showToDoModal: false,
			selector: 'card'
		}

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleViewShow = this.handleViewShow.bind(this);
		this.handleViewClose = this.handleViewClose.bind(this);
		this.handleDeleteEmp = this.handleDeleteEmp.bind(this)
		this.handleToDoClose = this.handleToDoClose.bind(this);
		this.handleToDoShow = this.handleToDoShow.bind(this);
	}
  
    handleDeleteEmp(event){ 
        
        event.preventDefault() 
        this.props.actions.deleteEmployee(this.props.details.id);
    } 



	handleClose() {
		selector: 'selectedCard'
		this.setState({ showModal: false });
	}

	handleShow() {
		this.setState({ showModal: true});
	}

	handleViewClose() {
		selector: 'selectedCard'
		this.setState({ showViewModal: false });
	}

	handleViewShow() {
		this.setState({ showViewModal: true});
	}

	handleToDoClose() {
		selector: 'selectedCard'
		this.setState({ showToDoModal: false });
	}

	handleToDoShow() {
		this.setState({ showToDoModal: true});
	}


	render() {
		let item = this.props.details;
		let id = this.props.details.id;		
		let selectedCard = this.state.showModal? 'selectedCard': 'card'
		return (
			<div>	
								
					<div >
						<button type="button" className="View" aria-label="View" onClick={this.handleViewShow}>
							<span aria-hidden="true"><i className="glyphicon glyphicon-pencil"></i></span>					
						</button>
						<button type="button" className="Delete" aria-label="View" onClick={this.handleDeleteEmp}>
							<span aria-hidden="true">&times;</span>							
						</button>
						<button type="button" className="ToDo" aria-label="ToDo" onClick={this.handleToDoShow}>
							<span aria-hidden="true">todo</span>							
						</button>
					</div>
					
						
					
					

				<div onClick={this.handleShow} className="item-{id}" key="{item.id}-{id}">
					<EmployeeCardDetails details={item} cardClass={selectedCard}/>
				</div>				
				<div className="modal-dialog" key="update-{id}">				
					<Modal show={this.state.showViewModal} onHide={this.handleViewClose} >
						<Modal.Header closeButton> </Modal.Header>
						<Modal.Body>
							<EmployeeDetailsUpdate details={item} id={id} key={id} actions={this.props.actions}/>
						</Modal.Body>
					</Modal>				
				</div>

				<div className="modal-dialog" key="view-{id}">				
					<Modal show={this.state.showModal} onHide={this.handleClose} >
						<Modal.Header closeButton> </Modal.Header>
						<Modal.Body>
							<EmployeeDetails details={item} id={id} key={id} actions={this.props.actions}/>
						</Modal.Body>
					</Modal>				
				</div>

				<div className="modal-dialog" key="Todo-{id}">				
					<Modal show={this.state.showToDoModal} onHide={this.handleToDoClose} >
						<Modal.Header closeButton> </Modal.Header>
						<Modal.Body>
							<EmployeeToDoCard todo={this.props.todo} id={id} key={id} actions={this.props.actions}/>
						</Modal.Body>
					</Modal>				
				</div>

			</div>
		);
	}

}