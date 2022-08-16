import { Component } from "react";

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: "",
    user: undefined,
  };

  onClick = () => {
    const founUser = this.props.users.find((user) => {
      return user.name.toLowerCase() === this.state.name.toLowerCase();
    });
    this.setState({ user: founUser });
  };

  render() {
    const { name, user } = this.state;
    console.log(this.state.name);
    return (
      <div style={{ marginBottom: "10px" }}>
        <h4>class User Search</h4>
        <input
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.onClick} style={{ marginLeft: "10px" }}>
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
  }
}

export default UserSearch;
