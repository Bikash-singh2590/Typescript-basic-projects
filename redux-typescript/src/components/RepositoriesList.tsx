import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useSelector } from "../hooks/useTypedSelector";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories, clearSearchRepositories } = useActions();

  const { loading, data, error } = useSelector((state) => state.repositories);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
  };

  const clearSearchHandler = () => {
    clearSearchRepositories();
    setTerm("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button type="submit" style={{ marginLeft: "10px" }}>
          Search
        </button>
      </form>
      <button onClick={clearSearchHandler} style={{ marginTop: "20px" }}>
        clear
      </button>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!loading && !error && data.map((name) => <div key={name}>{name}</div>)}
    </div>
  );
};

export default RepositoriesList;
