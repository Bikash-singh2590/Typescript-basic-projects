import { useState } from "react";

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();
  
  const onClick = () => {
    const founUser = Users.find((user) => {
      return user.name.toLowerCase() === name.toLowerCase();
    });
    setUser(founUser);
  };

  const Users = [
    { name: "Bikash", age: 26 },
    { name: "Harsh", age: 24 },
    { name: "Harsh Verma", age: 25 },
    { name: "Kaushal", age: 26 },
  ];

  return (
    <div style={{ marginBottom: "10px" }}>
      <h4>User Search</h4>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick} style={{ marginLeft: "10px" }}>
        Search
      </button>
      {user && (
        <div style={{ marginTop: "10px" }}>
          User Details
          <br></br>
          Name : {user && user.name}
          <br></br>
          Age : {user && user.age}
        </div>
      )}
    </div>
  );
};

export default UserSearch;
