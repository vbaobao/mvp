import React from 'react';
import axios from 'axios';
import Dashboard from './ui/Dashboard.jsx';
import Forms from './ui/Forms.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.updateStatus = this.updateStatus.bind(this);
    this.submitClient = this.submitClient.bind(this);
    this.submitShipment = this.submitShipment.bind(this);

    this.state = {
      clientdata: null,
      shipmentdata: null
    };
  }

  updateStatus(e, shipmentID, statuscode) {
    axios.post('/complete', {id: shipmentID, is_complete: statuscode})
      .then((res) => {
        this.setState({shipmentdata: res.data});
      })
      .catch((err) => console.error(err.message));
  }

  submitClient(e) {
    e.preventDefault();
    let newClientData = {};
    for (const input of e.target) {
      newClientData[input.name] = input.value;
    }
    axios.post('/newclient', newClientData)
      .then((res) => {
        alert(`Your new client ${newClientData.firstname} ${newClientData.lastname} has been added.`);
        this.setState({clientdata: res.data});
      })
      .catch((err) => console.error(err.message));
  }

  submitShipment(e) {
    e.preventDefault();
    let newShipmentData = {};

    for (const input of e.target) {
      newShipmentData[input.name] = input.value;
    }

    axios.post('/newshipment', newShipmentData)
      .then((res) => {
        alert('A new shipment has been added.');
        this.setState({shipmentdata: res.data});
      })
      .catch((err) => console.error(err.message));
  }

  componentDidMount() {
    // Use router to GET data to add to state
    axios.get('/shipmentdata')
      .then(res => this.setState({shipmentdata: res.data}))
      .catch((err) => console.error(err.message));

    axios.get('/clientdata')
      .then((res) => this.setState({clientdata: res.data}))
      .catch((err) => console.error(err.message));
  }

  render () {
    return (
      <div>
        <Dashboard shipmentdata={this.state.shipmentdata} updateStatus={this.updateStatus} />
        <Forms clientdata={this.state.clientdata} submitClient={this.submitClient} submitShipment={this.submitShipment} />
      </div>
      );
  };
}

export default App;