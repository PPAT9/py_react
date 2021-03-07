import React, { PureComponent } from 'react';
import { Button, ButtonToolbar, Modal } from 'react-bootstrap';

import EmployeeDetails from '../employeeDetails';
import EmployeeDetailsUpdate from '../employeeDetailsUpdate';
import EmployeeCardDetails from '../employeeCardDetails';

export default class EmployeeCard extends PureComponent {

	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			selector: 'card'
		}

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	handleClose() {
		selector: 'selectedCard'
		this.setState({ showModal: false });
	}

	handleShow() {
		this.setState({ showModal: true});
	}


	render() {
		let item = this.props.detials;
		let id = this.props.id;
		let selectedCard = this.state.showModal? 'selectedCard': 'card'
		return (
			<div>				
				<div onClick={this.handleShow} className="item-{id}" key={id}>
					<EmployeeCardDetails details={item} cardClass={selectedCard}/>
				</div>				
				<div className="modal-dialog" key={id}>				
					<Modal show={this.state.showModal} onHide={this.handleClose} >
						<Modal.Header closeButton> </Modal.Header>
						<Modal.Body>
							<EmployeeDetailsUpdate details={item} id={id} key={id} actions={this.props.actions}/>
						</Modal.Body>
					</Modal>				
				</div>
			</div>
		);
	}

}