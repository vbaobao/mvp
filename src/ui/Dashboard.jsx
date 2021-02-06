import React from 'react';
import ActiveShipments from './ActiveShipments.jsx';
import CompletedShipments from './CompletedShipments.jsx';

function Dashboard(props) {

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
    <div className='dashboard'>
      <h1>Shipments Dashboard</h1>
      <ActiveShipments shipments={active} updateStatus={props.updateStatus} />
      <CompletedShipments shipments={completed} updateStatus={props.updateStatus} />
    </div>
  );
}

export default Dashboard;