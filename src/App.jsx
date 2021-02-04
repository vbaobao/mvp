import React from 'react';
import Dashboard from './ui/Dashboard.jsx';
import Forms from './ui/Forms.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidMount() {
  //   // Use router to GET data to add to state
  // }

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