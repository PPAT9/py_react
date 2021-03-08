import React, { PureComponent } from 'react';
import _ from 'lodash';

export default class EmployeeCardDetails extends PureComponent {
	render(){
		let item = this.props.details;
		return(
			<div className={this.props.cardClass, "container-fluid"} >				
				<div className="row">
					<div className="col-xs-4">
			   		<img className="thumb" src={item.avatar} width="50" height="50"/>
					</div>
					<div className="col-xs-8">
			   		<article>
			   			<div>{item.firstName} {item.lastName}</div>
						<span>{_.truncate(_.split(item.bio,'.',1),{'length':35})}</span>							
					</article>
					</div>
				</div>
			</div>
		)
	}
}