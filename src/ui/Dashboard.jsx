import React from 'react';
import ActiveShipments from './ActiveShipments.jsx';
import CompletedShipments from './CompletedShipments.jsx';

function Dashboard(props) {
  console.log('Dashboard props: ', props.shipmentdata);
  const active = [];
  const completed = [];

  if (props.shipmentdata) {
    for (const shipment of props.shipmentdata) {
      if (shipment.is_complete === 0) {
        active.push(shipment);
      } else if (shipment.is_complete) {
        completed.push(shipment);
      }
    };
  }

  return (
    <div>
    <h1>Shipments</h1>
      <ActiveShipments shipments={active} />
      <CompletedShipments shipments={completed} />
    </div>
  );
}

export default Dashboard;