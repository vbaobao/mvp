import React from 'react';
import axios from 'axios';

function NewClient (props) {

  return (
    <div>
      <h2>Add a new client:</h2>
      <form className='newclientform' onSubmit={props.submitClient}>
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