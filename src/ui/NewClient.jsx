import React from 'react';
import axios from 'axios';

function NewClient (props) {

  function submitClient(e) {
    e.preventDefault();
    let newClientData = {};
    for (const input of e.target) {
      newClientData[input.name] = input.value;
    }
    axios.post('/newclient', newClientData)
      .then(() => alert(`Your new client ${newClientData.firstname} ${newClientData.lastname} has been added.`))
      .catch((err) => console.error(err.message));
  }

  return (
    <div>
      <h2>Add a new client:</h2>
      <form className='newclientform' onSubmit={submitClient}>
        <label name='firstname'>
          First Name:
          <input type='text' name='firstname' required />
        </label>
        <label name='lastname'>
          Last Name:
          <input type='text' name='lastname' required />
        </label>
        <label name='phone'>
          Phone Number:
          <input type='text' name='phone' />
        </label>
        <label name='email'>
          Email Address:
          <input type='email' name='email' />
        </label>
        <input type='submit' name='submit' value='Add new client' />
      </form>
    </div>
  );
}

export default NewClient;