import React from 'react';

function NewClient (props) {
  return (
    <form className='newclientform'>
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
      <input type='submit' value='Add new client' />
    </form>
  );
}

export default NewClient;