import { useLocation } from "react-router-dom";
import TimeSlot from "../components/TimeSlot";

function Booking() {
  const location = useLocation();
  const doctor = location.state;

  const slots = ["10:00 AM", "11:00 AM", "12:00 PM"];

  const handleSelect = (time) => {
    const appointment = {
      doctor: doctor?.name,
      time: time,
    };

    const oldAppointments =
      JSON.parse(sessionStorage.getItem("appointments")) || [];

    oldAppointments.push(appointment);

    sessionStorage.setItem(
      "appointments",
      JSON.stringify(oldAppointments)
    );

    alert("Appointment Booked!");
  };

  return (
    <div>
      <h2>Booking</h2>

      {doctor ? (
        <div>
          <h3>{doctor.name}</h3>
          <p>{doctor.specialization}</p>
        </div>
      ) : (
        <p>No doctor selected</p>
      )}

      <h3>Select Time Slot</h3>

      <div style={{ marginTop: "10px" }}>
        {slots.map((slot, i) => (
          <TimeSlot key={i} time={slot} onSelect={handleSelect} />
        ))}
      </div>
    </div>
  );
}

export default Booking;
