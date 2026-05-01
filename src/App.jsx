import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />

      <div className="layout">
        <Sidebar />

        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

