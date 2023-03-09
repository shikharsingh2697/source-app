import logo from "./logo.svg";
import { FirstPage } from "./FirstPage";
import "./App.css";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        margin: "40px"
      }}
      className="App"
    >
      <div>Rudderstack Source Creation</div>
      <FirstPage />
    </div>
  );
}

export default App;
