import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Alice from "./Alice";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Alice />} />
      </Routes>
    </Router>
  );
}

export default App;
