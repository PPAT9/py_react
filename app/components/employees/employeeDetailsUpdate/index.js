import React, { PureComponent } from 'react';

export default class EmployeeDetailsUpdate extends PureComponent {
    constructor(props) {
		super(props);
    console.log("In employee details update - props")
    console.log(this.props)
        this.state = { ...this.props.details} 
        this.handleInput = this.handleInput.bind(this) 
        this.handleSubmit = this.handleSubmit.bind(this) 
	}

    
    // Form submitting logic, prevent default page refresh  
    handleSubmit(event){ 
        const { firstName, lastName, age, jobTitle, dateJoined, bio, avatar } = this.state 
        event.preventDefault() 

        alert(` 
        ____Your Details____\n 
        firstName : ${firstName} 
        lastname : ${lastName} 
        Age : ${age} 
        jobTitle : ${jobTitle} 
        dateJoined : ${dateJoined} 
        bio: ${bio}
        avatar: ${avatar}
        `) 

        let request_body = {
          id: this.state.id,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          age: this.state.age,
          jobTitle: this.state.jobTitle,
          dateJoined: this.state.dateJoined,
          bio: this.state.bio,
          avatar: this.state.avatar
        };
        
        // Call updated
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
            <form key="user-profile" onSubmit={this.handleSubmit} >
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">FirstName </label>
                <div className="col-sm-10">
                  <input type="text" size="50"  name="firstName" placeholder="firstName" value={this.state.firstName} onChange={this.handleInput} key="1-{this.props.details.id}" />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-2 col-form-label">LastName</label>
                <div className="col-sm-10">
                  <input type="text" size="50" name="lastName" placeholder="lastName" value={this.state.lastName} onChange={this.handleInput} key="2-{this.props.details.id}"/>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Job Title</label>
                <div className="col-sm-10">
                  <input type="text" size="50"  name="jobTitle" placeholder="jobTitle" value={this.state.jobTitle} onChange={this.handleInput} key="3-{this.props.details.id}"/>
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Age</label>
                <div className="col-sm-10">
                <input type="text" size="50"  name="age" placeholder="age" value={this.state.age} onChange={this.handleInput} key="4-{this.props.details.id}"/>
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-2 col-form-label">dateJoined</label>
                <div className="col-sm-10">
                <input type="text" size="50" name="dateJoined" placeholder="dateJoined" value={this.state.dateJoined} onChange={this.handleInput} key="5-{this.props.details.id}"/>
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Avatar</label>
                <div className="col-sm-10">
                <textarea rows="2" cols="50" name="avatar" placeholder="avatar" value={this.state.avatar} onChange={this.handleInput} key="7-{this.props.details.id}"/>
                </div>
              </div>  
              
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Bio</label>
                <div className="col-sm-10">
                <textarea rows="4" cols="50" name="bio" placeholder="bio" value={this.state.bio} onChange={this.handleInput} key="7-{this.props.details.id}"/>
                </div>
              </div>  
                
                
              <input type="submit" name="Submit" key="submit"/>
            </form>
		)
	}
	
}