import "./App.css";
import React, { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="main">
      <button onClick={() => setShow(true)}>Cliquez-ici</button>
    </div>
  );
}

export default App;
