import React from 'react';
import axios from 'axios';

function NewShipment(props) {
  //Clientname input type=select
  //Loop through props to join name and form options

  function submitShipment(e) {
    e.preventDefault();
    let newShipmentData = {};

    for (const input of e.target) {
      if (input.name === 'clientname') {
        let parseName = input.value.split(' ');
        newShipmentData.firstname = parseName[0];
        newShipmentData.lastname = parseName[1];
      } else {
        newShipmentData[input.name] = input.value;
      }
    }

    axios.post('/newshipment', newShipmentData)
      .then(() => alert('A new shipment has been added. May need to reload page to see changes.'))
      .catch((err) => console.error(err.message));
  }

  return (
    <div>
      <h2>Add a new shipment:</h2>
      <form className='newshipmentform' onSubmit={submitShipment}>
        <label name='clientname'>
          Client:
          <select name='clientname' required>
            <option value=''></option>
            <option value='Test Guy'>Test Guy</option>
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