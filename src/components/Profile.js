import React from 'react';
import axios from 'axios';
import PDF from 'react-pdf-js';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.userFirstName,
      lastName: this.props.userLastName,
      email: this.props.userEmail,
      resume: this.props.userResume,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
  }

  onChangeFirstName(e) {
    this.setState({ firstName: e.target.value });
  }

  onChangeLastName(e) {
    this.setState({ lastName: e.target.value });
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  updateUser() {
    axios.put('api/updateUser/', {
      userId: this.props.userId,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
    })
      .then((data) => {
        alert('Your profile has been updated!');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.updateUser;
    this.setState({
      firstName: form.firstName.value || this.state.firstName,
      lastName: form.lastName.value || this.state.lastName,
      email: form.email.value || this.state.email,
    }, () => this.updateUser());
    // clear the form for the next input
    form.firstName.value = '';
    form.lastName.value = '';
    form.email.value = '';
  }

  render() {
    const userName = `${this.props.userFirstName} ${this.props.userLastName}`;
    const resume = `${this.props.userResume}`;
    return (
      <div className="user-profile">
        <h3>Hello, {userName}!</h3>
        <br />
        <strong>Update Your Info:</strong><br />
        <form name="updateUser" onSubmit={this.handleSubmit}>
          <label htmlFor="firstName">
            First Name:
            <input type="text" name="firstName" value={this.state.firstName} onChange={this.onChangeFirstName} />
          </label>
          <br />
          <label htmlFor="firstName">
            Last Name:
            <input type="text" name="lastName" value={this.state.lastName} onChange={this.onChangeLastName} />
          </label>
          <br />
          <label htmlFor="email">
            Email:
            <input type="text" name="email" value={this.state.email} onChange={this.onChangeEmail} />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
        <hr />
        <PDF file={resume} />
      </div>
    );
  }
}

export default Profile;
