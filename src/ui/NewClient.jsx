import React from 'react';
import axios from 'axios';

class NewClient extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.resetForm = this.resetForm.bind(this);

    this.state = {
      firstname: '',
      lastname: '',
      phone: '',
      email: ''
    }
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  resetForm() {
    //Seems to override the submit form function
    this.setState(
      {
        firstname: '',
        lastname: '',
        phone: '',
        email: ''
      }
    );
  }

  render () {
    return (
      <div>
        <h2>Add a new client:</h2>
        <form className='newclientform' onSubmit={this.props.submitClient}>
          <label name='firstname'>
            First Name:
            <input type='text' name='firstname' value={this.state.firstname} onChange={this.handleChange} required />
          </label>
          <label name='lastname'>
            Last Name:
            <input type='text' name='lastname' value={this.state.lastname} onChange={this.handleChange} required />
          </label>
          <label name='phone'>
            Phone Number:
            <input type='text' name='phone' value={this.state.phone} onChange={this.handleChange} />
          </label>
          <label name='email'>
            Email Address:
            <input type='email' name='email' value={this.state.email} onChange={this.handleChange} />
          </label>
          <input type='submit' name='submit' value='Add new client' />
        </form>
      </div>
    );
  }
}

export default NewClient;