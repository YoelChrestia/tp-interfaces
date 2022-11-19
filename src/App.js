import { ChakraProvider } from "@chakra-ui/react";
import { Route } from "wouter";
import Home from "./pages/home";
import Login from "./pages/login/index";
import Calendar from "./pages/calendar";

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
      <Route path="/calendario-academico">
        <Calendar></Calendar>
      </Route>
    </ChakraProvider>
  );
}

export default App;
