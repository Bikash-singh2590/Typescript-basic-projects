import { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setName("");
    setGuests([...guests, name]);
  };

  const onClickClear = () => {
    setName("");
    setGuests([]);
  };

  return (
    <div style={{ marginBottom: "10px" }}>
      <h4>Guest List</h4>
      <ul>
        {guests.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginBottom: "10px" }}
      />
      <br></br>
      <button onClick={onClick} style={{ marginLeft: "10px" }}>
        Add Guest
      </button>

      <button onClick={onClickClear} style={{ marginLeft: "10px" }}>
        Clear
      </button>
    </div>
  );
};

export default GuestList;
