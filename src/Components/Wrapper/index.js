import React from "react";
import "./style.css";

// Overall Wrapper Component.

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
  }

export default Wrapper;