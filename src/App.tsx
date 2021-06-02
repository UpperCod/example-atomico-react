import React, { useState } from "react";
import "./App.css";
import { Modal } from "@atomico/components/modal.react";
import { ReactDsTitle } from "./atomico/atomico";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <ReactDsTitle style={{ "--color": "tomato" }}>my content!</ReactDsTitle>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Open modal
      </button>
      <Modal show={show} full-size>
        <img
          src="https://media.giphy.com/media/Maslv9XBFXQMyFogjG/giphy.gif"
          alt=""
          slot="background"
        />
        <ReactDsTitle style={{ "--color": "gold" }}>Modal</ReactDsTitle>
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          closed modal
        </button>
      </Modal>
    </div>
  );
}

export default App;
