import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h3>MediCare</h3>

      <Link to="/">Doctors</Link>
      <Link to="/booking">Booking</Link>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
}

export default Sidebar;
