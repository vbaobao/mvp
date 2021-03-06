import React from 'react';
import axios from 'axios';

function NewShipment(props) {
  //Set up options
  let options = !props.clients
    ? ''
    : props.clients.map((client) => {
      return <option key={client.id} value={client.id}>{client.firstname} {client.lastname}</option>;
    });

  return (
    <div>
      <h2>Add a new shipment:</h2>
      <form className='newshipmentform' onSubmit={props.submitShipment}>
        <label name='client_id'>
          Client:
          <select name='client_id' required>
            <option value=''></option>
            {options}
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