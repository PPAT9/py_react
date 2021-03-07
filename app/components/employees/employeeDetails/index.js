import React, { PureComponent } from 'react';

export default class EmployeeDetails extends PureComponent {
	render(){
		let item = this.props.details;
		return (
			<div class="container-fluid">
				<div class="row">
					<div class="col-xs-4">
						<img className="thumb" src={item.avatar} />
					</div>
					<div class="col-xs-8">
						<h1>{item.firstName}.{item.lastName}</h1>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-4">
						<p>{item.jobTitle}</p>	
						<p>{item.age}</p>	
						<p>{item.dateJoined}</p>	
					</div>
					<div class="col-xs-8">{item.bio}</div>
				</div>									
			</div>
		)
	}
	
}