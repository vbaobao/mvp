import React from 'react';
import axios from 'axios';
import Dashboard from './ui/Dashboard.jsx';
import Forms from './ui/Forms.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.updateStatus = this.updateStatus.bind(this);

    this.state = {
      clientdata: null,
      shipmentdata: null
    };
  }

  updateStatus(e, shipmentID, statuscode) {
    axios.post('/complete', {id: shipmentID, is_complete: statuscode})
      .then((res) => {
        console.log(`Shipment ${shipmentID}'s status has been updated`);
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
        <Forms clientdata={this.state.clientdata}/>
      </div>
      );
  };
}

export default App;