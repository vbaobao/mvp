import React from 'react';

function NewClient (props) {
  function submitClient(e) {
    e.preventDefault();
    console.log('New client submitted');
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
        <input type='submit' value='Add new client' />
      </form>
    </div>
  );
}

export default NewClient;