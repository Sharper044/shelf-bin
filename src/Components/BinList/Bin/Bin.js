import React from 'react';
import '../../../reset.css';
import './Bin.css';

var Bin = (props) => {
  if(props.status === 'full'){
    return(
      <div className="FullBin">
        Bin {props.binID}
      </div>
    )
  }
  else if (props.status === 'empty'){
    return(
      <div className="EmptyBin">
        + Add Inventory
      </div>
    )
  }
}
export default Bin;

