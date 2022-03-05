import React from "react";
import { Component } from "react/cjs/react.production.min";
class Comp3 extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="border">
            <h1>Class Based Component with props</h1>
          <img src="second.jpg" alt="load err"></img>
          <h4>Name:{this.props.name}</h4>
          <h4>Loaction:{this.props.location}</h4>
          <h4>City:{this.props.city}</h4>
        </div>
      </React.Fragment>
    );
  }
}
export default Comp3;