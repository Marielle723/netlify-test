import "./App.css";
import { Router, Routes, Route } from "react-router-dom";

import Alice from "./Alice";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Alice />} />
      </Routes>
    </Router>
  );
}

export default App;
