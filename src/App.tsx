import React from "react";

import "./App.css";
import Root from "./routes/Root";
import { useGetPostsQuery } from "./services/PostApi";
function App() {
  const { data, isLoading, error } = useGetPostsQuery("");

  return <Root />;
}

export default App;
