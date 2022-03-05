import React from "react";
import { Component } from "react/cjs/react.production.min";
class Comp1 extends Component {
  constructor() {
    super();
    this.state = { displayinfo: false };
    console.log("constructor is working", this);
    this.readMore = this.readMore.bind(this); //if we use Arrow function no need Bind
    this.showLess = this.showLess.bind(this); // if we use Arrow function no need Bind
  }
  readMore() {
    this.setState({ displayinfo: true });
    console.log("ReadMore working", this);
  }
  showLess() {
    this.setState({ displayinfo: false });
    console.log("ShowLess Working", this);
  }
  render() {
    return (
      <React.Fragment>
        <div className="border2">
          <h1>State and SetState</h1>
          <h5>ABOUT US</h5>
          <p>
            Since 1997, Al Ajmi Marble is a leading Omani marble manufacturing
            Company and exporter of natural Omani marble. Starting with just one
            quarry in 1997, today we own three quarries located in Oman: Sohar,
            Ibri and Al Mudaibi. Our factory is equipped with the latest Italian
            technologies for cutting, polishing and profiling which helps us to
            meet any clients requirements around the world. We continuously
            invest in upgrading our technology and skills, to serve our clients
            with international standard.
          </p>

          {this.state.displayinfo ? (
            <div>
              <p>
                Gaining experience over the past 20 years in international
                markets, allows us to grab a better understanding of our
                customer requirements and meet the demand of any project around
                the world. Today we feel proud to say that we export marble to
                more than 45 destinations around the globe. Al Ajmi Marble
                exports slabs, tiles and cut to size.
              </p>
              {<button onClick={this.showLess}>ShowLess</button>}
            </div>
          ) : (
            <button onClick={this.readMore}>Readmore</button>
          )}
        </div>
      </React.Fragment>
    );
  }
}
export default Comp1;
