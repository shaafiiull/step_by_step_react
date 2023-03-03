import "./App.css";
import Hello from "./module01/Hello";
import NonJSXElement from "./module01/NonJSXComponent";
import Welcome from "./module01/Welcome";

function App() {
  return (
    <div className="App">
      <Hello></Hello>
      <Welcome></Welcome>
      <NonJSXElement></NonJSXElement>
    </div>
  );
}

export default App;
