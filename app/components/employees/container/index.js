import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as employeeActions from '../actions';
import EmployeeCard from '../employeeCard';

import _ from 'lodash';

class EmployeeListView extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			employeeData: [],
			companyInfo: {},
			empID: ''
		}
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

	render() {
		const employeeCards = this.state.employeeData.map(
			(item, i) => {
				return (<EmployeeCard detials={item} id={i} key={i} actions={this.props.actions}/>)
			}
		);

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
				< div className="cmpEmp">
					Our Employees
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









