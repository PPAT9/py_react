import React, { PureComponent } from 'react';

export default class EmployeeDetailsUpdate extends PureComponent {
    constructor(props) {
		super(props);
        this.state = { ...this.props.details} 
        this.handleInput = this.handleInput.bind(this) 
        this.handleSubmit = this.handleSubmit.bind(this) 
	}

    
    // Form submitting logic, prevent default page refresh  
    handleSubmit(event){ 
        const { firstName, lastName, age, jobTitle, dateJoined, bio } = this.state 
        event.preventDefault() 
        alert(` 
        ____Your Details____\n 
        firstName : ${firstName} 
        lastname : ${lastName} 
        Age : ${age} 
        jobTitle : ${jobTitle} 
        dateJoined : ${dateJoined} 
        bio: ${bio}
        `) 
        let request_body = {
          id: this.state.id,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          age: this.state.age,
          jobTitle: this.state.jobTitle,
          dateJoined: this.state.dateJoined,
          bio: this.state.bio,
          avtar: this.state.avtar
        };
        
        this.props.actions.updateEmployee(this.props.details.id, request_body);
    } 

    handleInput(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }

	render(){
		let item = this.props.details;
		return (
            <form formId="user-profile" onSubmit={this.handleSubmit} >
                <input type="text" name="firstName" placeholder="firstName" value={this.state.firstName} onChange={this.handleInput} key={this.props.firstName} />
                <input type="text" name="lastName" placeholder="lastName" value={this.state.lastName} onChange={this.handleInput} key={this.props.lastname}/>
                <input type="text" name="jobTitle" placeholder="jobTitle" value={this.state.jobTitle} onChange={this.handleInput} key={this.props.jobTitle}/>
                <input type="text" name="age" placeholder="age" value={this.state.age} onChange={this.handleInput} key={this.props.age}/>
                <input type="text" name="dateJoined" placeholder="dateJoined" value={this.state.dateJoined} onChange={this.handleInput} key={this.props.dateJoined}/>
                <input type="text" name="avtar" placeholder="avtar" value={this.state.avtar} onChange={this.handleInput} key={this.props.id}/>
                <input type="textarea"  name="bio" placeholder="bio" value={this.state.bio} onChange={this.handleInput} key={this.props.bio}/>
                <input type="submit" name="Submit" key="submit"/>
            </form>
		)
	}
	
}