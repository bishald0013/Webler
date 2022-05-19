import React from "react";
import './readmore.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import { Button  } from 'react/bootstrap'

function Bishal() {
  alert("you clicked it");
}

function Readmore() {
  return (
    <div className="button_1">
      <button className="btn_1"
        onClick={Bishal}>
        Read More
      </button>
    </div>
  );
}

export default Readmore;