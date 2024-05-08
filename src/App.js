import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AdhaarGenerator from "./screens/AdhaarGenerator";
function App() {
  return (
    <Router>
      <AdhaarGenerator />
    </Router>
  );
}

export default App;
