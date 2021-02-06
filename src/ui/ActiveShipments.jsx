import React from 'react';
import axios from 'axios';

function ActiveShipments(props) {
  console.log('Active shipments: ', props);
  // For each to create table rows and data
  // Last row contains button
  function updateStatus(e, shipmentID) {
    axios.post('/complete', {id: shipmentID, is_complete: 1})
      .then(() => console.log('SHIPMENT STATUS HAS BEEN UPDATED.'))
      .catch((err) => console.error(err.message));
  }

  let table = props.shipments.map((shipment) => {
    return (
      <tr key={shipment.id}>
        <td>{shipment.id}</td>
        <td>{shipment.firstname} {shipment.lastname}</td>
        <td>{shipment.email}</td>
        <td>{shipment.volume}</td>
        <td>{shipment.profit}</td>
        <td>
          <button type='button' onClick={(e) => {updateStatus(e, shipment.id);}}>Active</button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <h2>Active Shipments</h2>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Client</th>
            <th>Email</th>
            <th>Volume</th>
            <th>Profit</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {table}
        </tbody>
      </table>
    </div>
  );
}

export default ActiveShipments;