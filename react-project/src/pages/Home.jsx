import doctors from "../data/doctors";
import DoctorCard from "../components/DoctorCard";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleBook = (doctor) => {
    navigate("/booking", { state: doctor });
  };

  return (
    <div>
      <h2>Doctors</h2>
      {doctors.map((doc) => (
        <DoctorCard key={doc.id} doctor={doc} onBook={handleBook} />
      ))}
    </div>
  );
}

export default Home;