import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as employeeActions from '../actions';
import EmployeeCard from '../employeeCard';
import { Button, ButtonToolbar, Modal } from 'react-bootstrap';
import EmployeeDetailsUpdate from '../employeeDetailsUpdate';

import _ from 'lodash';

class EmployeeListView extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			employeeData: [],
			companyInfo: {},
			empID: '',
			showModal: false
		}
		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	componentWillMount() {
		this.props.actions.fetchEmployee();
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.employeeData !== undefined && nextProps.employeeData !== this.props.employeeData) {			
			this.setState({
				employeeData: nextProps.employeeData.employees,
				companyInfo: nextProps.employeeData.companyInfo,
			});
		}
	}

	handleClose() {
		this.setState({ showModal: false });
	}

	handleShow() {
		this.setState({ showModal: true});
	}

	render() {
		const employeeCards = this.state.employeeData.map(
			(item, i) => {
				return (<EmployeeCard details={item} id={i} key={i} actions={this.props.actions}/>)
			}
		);
		let new_id = Math.round(Math.random() * (100000000000000 - 100) + 100).toString()
		
		let empty_item = {id: new_id, firstName: "", lastName: "", age: "", jobTitle: "", dateJoined: "", bio: "", avatar: ""}
		
		return (
			<div>
				<div className="table">
					<div className="table-cell colspan-3 header">
						{this.state.companyInfo.companyName}
					</div>
					<div className="table-cell cmpmotto">
						{this.state.companyInfo.companyMotto}
					</div>
					<div className="table-cell cmpest">
						Since : {this.state.companyInfo.companyEst}
					</div>
				</div>
				< div className="table-cell cmpEmp">
					Our Employees
					<button onClick={this.handleShow} >Add</button>
					<div className="modal-dialog" key={new_id}>				
						<Modal show={this.state.showModal} onHide={this.handleClose} >
							<Modal.Header closeButton> </Modal.Header>
							<Modal.Body>
								<EmployeeDetailsUpdate details={empty_item} id={new_id} key={new_id} actions={this.props.actions}/>
							</Modal.Body>
						</Modal>				
					</div>
				</div>
				
				<div className="card-container">
					{employeeCards}
				</div>
			</div>
		);
	}
}


const mapStateToProps = (state) => {
	return ({
		employeeData: state.employee.employeeData
	})
}

const mapDispatchToProps = (dispatch) => {
	return ({ actions: bindActionCreators(employeeActions, dispatch) });
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeListView);









