import "./TimeSlot.css";

function TimeSlot({ time, onSelect }) {
  return (
    <button className="slot" onClick={() => onSelect(time)}>
      {time}
    </button>
  );
}

export default TimeSlot;
