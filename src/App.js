import React from "react";
import Comp1 from "./Components/Comp1";
import Comp2 from "./Components/Comp2";
import Comp3 from "./Components/Comp3";
import Comp4 from "./Components/Comp4";
import Comp5 from "./Components/Comp5";
import Comp6 from "./Components/Comp6";
import "./Style.css";
function App() {
  return (
    <React.Fragment>
      <div className="border">
        <Comp1></Comp1>
        <Comp2 name="Al Ajmi Marble" location="Oman" city="Muscat"></Comp2>
        <Comp3 name="Al Maha Marble" location="Oman" city="Muscat"></Comp3>
        <Comp4 name="Al Tasnim Marble" location="Oamn" city="Musact"></Comp4>
        <Comp5 name="Al Ajmi Marble" location="Oman" city="Muscat"></Comp5>
        <Comp6></Comp6>
      </div>
    </React.Fragment>
  );
}
export default App;
