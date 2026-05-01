import { useEffect, useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const data =
      JSON.parse(sessionStorage.getItem("appointments")) || [];
    setAppointments(data);

    const handleRefresh = () => {
      sessionStorage.removeItem("appointments");
    };

    window.addEventListener("beforeunload", handleRefresh);

    return () => {
      window.removeEventListener("beforeunload", handleRefresh);
    };
  }, []);

  const handleCancel = (index) => {
    const updated = [...appointments];
    updated.splice(index, 1);

    setAppointments(updated);
    sessionStorage.setItem("appointments", JSON.stringify(updated));
  };

  return (
    <div>
      <h2>My Appointments</h2>

      {appointments.length === 0 ? (
        <p className="empty">No appointments yet. Go book one!</p>
      ) : (
        <div className="grid">
          {appointments.map((a, i) => (
            <div key={i} className="dash-card">
              <h4>{a.doctor}</h4>
              <p>{a.time}</p>

              <button onClick={() => handleCancel(i)}>
                Cancel
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;

