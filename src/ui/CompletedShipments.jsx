import React from 'react';
import axios from 'axios';

function CompletedShipments(props) {

  let table = props.shipments.map((shipment) => {
    return (
      <tr key={shipment.id}>
        <td>{shipment.id}</td>
        <td>{shipment.firstname} {shipment.lastname}</td>
        <td>{shipment.email}</td>
        <td>{shipment.volume}</td>
        <td>{shipment.profit}</td>
        <td>
          <button type='button' onClick={(e) => {props.updateStatus(e, shipment.id, 0);}}>Mark active</button>
        </td>
      </tr>
    );
  });

  // For each to create table rows and data
  return (
    <div>
      <h2>Shipment History</h2>
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

export default CompletedShipments;