import React from 'react';

function CompletedShipments(props) {
  console.log('Completed shipments: ', props.shipments);
  // For each to create table rows and data
  return (
    <div>
      <h2>Shipment History</h2>
      <table></table>
    </div>
  );
}

export default CompletedShipments;