import React from 'react';
import axios from 'axios';
import Dashboard from './ui/Dashboard.jsx';
import Forms from './ui/Forms.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // Use router to GET data to add to state
    console.log('COMPONENT MOUNTED');
    axios.get('/data')
      .then(res => console.log(res))
      .catch((err) => console.error(err.message));
  }

  render () {
    return (
      <div>
        <Dashboard />
        <Forms />
      </div>
      );
  };
}

export default App;