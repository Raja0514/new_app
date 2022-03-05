import React from "react";
function Comp5(props) {
  return (
    <React.Fragment>
      <div className="border4">
        <h1>Function Based Component with props</h1>
        <img src="fourth.jpg" alt="load error"></img>
        <h4>Name:{props.name}</h4>
        <h4>Location:{props.location}</h4>
        <h4>City:{props.city}</h4>
      </div>
    </React.Fragment>
  );
}
export default Comp5;
