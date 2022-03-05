import React from "react";
import { Component } from "react/cjs/react.development";
class Comp6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "Rusayl",
      address: "Near national gas company",
      branch: "Rsayl branch ",
    };
  }
  myLocat = () => {
    this.setState({
      location: "Sohar",
      address: "Near Almaha Pump",
      branch: "Sohar",
    });
  };
  myLocation = () => {
    this.setState({
      location: "Rusayl",
      address: "Near Gas Company",
      branch: "Rusayl Branch",
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="border5">
          <h1>State and SetState</h1>
          <div className="new">
            <button onClick={this.myLocat}>NewLocation</button>
            <button onClick={this.myLocation}>OldLocation</button>
            <h2>Location:{this.state.location}</h2>
            <h2>Address:{this.state.address}</h2>
            <h2>Branch:{this.state.branch}</h2>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Comp6;
