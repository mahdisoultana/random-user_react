import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import RandomUser from "./components/RandomUser/RandomUser";
import { QueryClientProvider, QueryClient } from "react-query";

function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <RandomUser />
    </QueryClientProvider>
  );
}

export default App;
