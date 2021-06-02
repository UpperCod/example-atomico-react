import logo from "./logo.svg";
import { useState, useEffect } from "react";
import { DsTitle } from "./atomico/atomico.react";
import "./App.css";

function App() {
  const [autoIncrement, setIncrement] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setIncrement((state) => state + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DsTitle>
          Edit <code>src/App.js</code> and save to reload.
          <span>{autoIncrement}</span>
        </DsTitle>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
