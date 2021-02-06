import React from 'react';
import NewClient from './NewClient.jsx';
import NewShipment from './NewShipment.jsx';

function Forms(props) {
  return (
    <div className='all_forms'>
      <NewClient submitClient={props.submitClient} />
      <NewShipment clients={props.clientdata}/>
    </div>
  );
};

export default Forms;