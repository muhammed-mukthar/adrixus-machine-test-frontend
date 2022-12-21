import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
