import React from 'react';
import ActiveShipments from './ActiveShipments.jsx';
import CompletedShipments from './CompletedShipments.jsx';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
      <h1>Shipments</h1>
        <ActiveShipments />
        <CompletedShipments />
      </div>
    );
  }
}

export default Dashboard;