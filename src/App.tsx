import React from "react";

import "./App.css";
import { useGetPostsQuery } from "./services/PostApi";
function App() {
  const { data, isLoading, error } = useGetPostsQuery("");

  return (
    <div className="App">
      Hello world
      <button onClick={() => console.log(data)}>Click</button>
    </div>
  );
}

export default App;
