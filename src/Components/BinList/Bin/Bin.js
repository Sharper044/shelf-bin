import React from 'react';
import '../../../reset.css';
import './Bin.css';

var Bin = (props) => {
  if(props.status === 'full'){
    return(
      <div className="FullBin bin">
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet"/>
        Bin {props.binID}
      </div>
    )
  }
  else if (props.status === 'empty'){
    return(
      <div className="EmptyBin bin">
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet"/>
        + Add Inventory
      </div>
    )
  }
}
export default Bin;

