import logo from "./logo.svg";
import "./App.css";
import { Form } from "./components/Form";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form />
        <Navbar />
      </header>
    </div>
  );
}

export default App;
