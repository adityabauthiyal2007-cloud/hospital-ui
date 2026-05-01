import "./DoctorCard.css";

function DoctorCard({ doctor, onBook }) {
  return (
    <div className="card">
      <h3>{doctor.name}</h3>
      <p>{doctor.specialization}</p>
      <button onClick={() => onBook(doctor)}>Book</button>
    </div>
  );
}

export default DoctorCard;
