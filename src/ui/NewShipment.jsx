import React from 'react';

function NewShipment(props) {
  //Clientname input type=select
  //Loop through props to join name and form options

  function submitShipment(e) {
    e.preventDefault();
    console.log('New shipment submitted');
  }

  return (
    <div>
      <h2>Add a new shipment:</h2>
      <form className='newshipmentform' onSubmit={submitShipment}>
        <label name='clientname'>
          Client:
          <select name='clientname' required>
            <option value=''></option>
            <option value='test'>TEST</option>
          </select>
        </label>
        <label name='volume'>
          Order Volume:
          <input type='number' name='volume' required />
        </label>
        <label name='charge'>
          Charge:
          <input type='number' name='charge' required />
        </label>
        <label name='cost'>
          Cost:
          <input type='number' name='cost' required />
        </label>
        <label name='address'>
          Address:
          <input type='text' name='address' required />
        </label>
        <input type='submit' value='Add new shipment' />
      </form>
    </div>
  );
}

export default NewShipment;