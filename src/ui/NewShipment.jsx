import React from 'react';

function NewShipment(props) {
  //Clientname input type=select
  //Loop through props to join name and form options
  return (
    <form className='newshipmentform'>
      <label name='clientname'>
        Client:
        <select name='clientname' required>
          <option value=''>''</option>
        </select>
      </label>
      <label name='volume'>
        Order Volume:
        <input type='number' name='volume' required />
      </label>
      <label name='charge'>
        Phone Number:
        <input type='number' name='charge' required />
      </label>
      <label name='cost'>
        Email Address:
        <input type='number' name='cost' required />
      </label>
      <label name='address'>
        Address:
        <input type='text' name='address' required />
      </label>
      <input type='submit' value='Add new shipment' />
    </form>
  );
}

export default NewShipment;