import "./App.css";
import Counter from "./module01/Counter";
import Hello from "./module01/Hello";
import NonJSXElement from "./module01/NonJSXComponent";
import Subscription from "./module01/Subscription";
import Welcome from "./module01/Welcome";

function App() {
  return (
    <div className="App">
      <Hello name="shams" age={23}>
        Profession: Scientist
      </Hello>
      {/* <Counter></Counter> */}
      {/* <Subscription></Subscription> */}
      {/*       <Hello name="shams" age={23}>
        Profession: Scientist
      </Hello>
      <Hello name="Akash" age={33}>
        {" "}
        Profession: BCS Cadre
      </Hello>
      <Hello name="Bipul" age={50}>
        {" "}
        Profession: Businessman
      </Hello>
      <Welcome name="shams" age={23}>
        {" "}
        Profession: Scientist
      </Welcome>
      <Welcome name="Akash" age={53}>
        {" "}
        Profession: BCS Cadre
      </Welcome> */}
      {/* <NonJSXElement></NonJSXElement> */}
    </div>
  );
}

export default App;
