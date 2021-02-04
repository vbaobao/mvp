import React from 'react';
import Axios from 'axios';
import Dashboard from './ui/Dashboard.jsx';
import Forms from './ui/Forms.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // Use router to GET data to add to state
    fetch('http://localhost:3000/')
      .then( res => console.log(res) );
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