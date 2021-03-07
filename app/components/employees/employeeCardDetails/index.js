import React, { PureComponent } from 'react';
import _ from 'lodash';

export default class EmployeeCardDetails extends PureComponent {
	render(){
		let item = this.props.details;
		return(
			<div className={this.props.cardClass}>
			   <img className="thumb" src={item.avatar} />
			   <article>
			   		<div>{item.firstName} {item.lastName}</div>
					<span>{_.truncate(_.split(item.bio,'.',1),{'length':35})}</span>							
				</article>
			</div>
		)
	}
}