import { useQuery } from "react-query";
import axios from "axios";
const App = () => {
  const { isLoading, error, data } = useQuery("todos", async () => {
    const response = await axios("https://jsonplaceholder.typicode.com/todos");
    return response.data;
  });

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "blue" }}>
        API from jsonplaceholder todos using REACT QUERY
      </h1>

      {error && <div>Error fetching data please try again {error.message}</div>}

      <ul>
        {isLoading ? (
          <div>Loading data please wait</div>
        ) : (
          data.map((todo) => <li key={todo.id}>{todo.title}</li>)
        )}
      </ul>
    </div>
  );
};

export default App;
