import ReactDOM from "react-dom";
import Parent from "./props/Parent";
import GuestList from "./state/guestList";
import UserSearch from "./ref/UserSearch";
import EventComponent from "./events/EventComponent";
import ClassBasedUserSearch from "./class/UserSearch";

const App = () => {
  const users = [
    { name: "Bikash", age: 26 },
    { name: "Viku", age: 26 },
  ];
  return (
    <div>
      <h1 style={{ marginLeft: "45px" }}>Hello world</h1>
      <Parent />
      <GuestList />
      <UserSearch />
      <EventComponent />
      <ClassBasedUserSearch users={users} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
