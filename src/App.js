import "./App.css";
import ConditionalRendering from "./conditional rendering/ConditionalRendering";
import UserForm from "./Form Handling/UserForm";
import GroceryApp from "./GroceryProject/GroceryApp";
import Header from "./GroceryProject/Header";
import MountingMethods from "./LifeCycleMethods/MountingMethods";
import ListRendering from "./ListRendering/ListRendering";
import ParentComponent from "./methodasProps/ParentComponent";
import BindingEvent from "./module01/BindingEvent";
import Counter from "./module01/Counter";
import Hello from "./module01/Hello";
import NonJSXElement from "./module01/NonJSXComponent";
import RandomName from "./module01/RandomName";
import Subscription from "./module01/Subscription";
import Welcome from "./module01/Welcome";
import Style from "./Styling/Style";

function App() {
  return (
    <div className="App">
      <GroceryApp></GroceryApp>
      {/* <RandomName></RandomName> */}
      {/* <MountingMethods></MountingMethods> */}
      {/* <UserForm></UserForm> */}
      {/* <Style greeting="Hello from parent" shouldGreet={false}></Style> */}
      {/* <ListRendering></ListRendering> */}
      {/* <ConditionalRendering></ConditionalRendering> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <BindingEvent></BindingEvent> */}
      {/*       <Hello name="shams" age={23}>
        Profession: Scientist
      </Hello> */}
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
