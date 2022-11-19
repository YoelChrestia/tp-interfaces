import { ChakraProvider } from "@chakra-ui/react";
import Login from "./pages/login/index";
import Home from "./pages/home";
import { Route } from "wouter";

import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <Route path="/">
        <Login />
      </Route>
      <Route path="/home">
        <Home></Home>
      </Route>
    </ChakraProvider>
  );
}

export default App;
