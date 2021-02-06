import React from 'react';

function ActiveShipments(props) {
  console.log('Active shipments: ', props);
  // For each to create table rows and data
  // Last row contains button
  return (
    <div>
      <h2>Active Shipments</h2>
      <table></table>
    </div>
  );
}

export default ActiveShipments;