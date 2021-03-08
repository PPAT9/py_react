import React, { PureComponent } from 'react';

export default class EmployeeDetails extends PureComponent {
	render(){
		let item = this.props.details;
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-xs-4">
						<img className="thumb" src={item.avatar} width="50" height="50"/>
					</div>
					<div className="col-xs-8">
						<h1>{item.firstName}.{item.lastName}</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-4">
						<p>{item.jobTitle}</p>	
						<p>{item.age}</p>	
						<p>{item.dateJoined}</p>	
					</div>
					<div className="col-xs-8">{item.bio}</div>
				</div>									
			</div>
		)
	}
	
}