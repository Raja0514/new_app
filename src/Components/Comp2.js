import React from "react";
import { Component } from "react/cjs/react.production.min";
class Comp2 extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="border1">
            <h1>Class Based Component with Props</h1>
          <img src="first.jpg" alt="load error"></img>
          <h4>Name:{this.props.name}</h4>
          <h4>Location:{this.props.location}</h4>
          <h4>City:{this.props.city}</h4>
        </div>
      </React.Fragment>
    );
  }
}

export default Comp2;
