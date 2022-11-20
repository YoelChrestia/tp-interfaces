import { ChakraProvider } from "@chakra-ui/react";
import { Route } from "wouter";
import Home from "./pages/home";
import Login from "./pages/login/index";
import Calendar from "./pages/calendar";
import Materias from "./pages/materias";
import Notas from "./pages/notas";
import Mensajeria from "./pages/mensajeria";

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
      <Route path="/materias">
        <Materias></Materias>
      </Route>
      <Route path="/notas">
        <Notas></Notas>
      </Route>
      <Route path="/mensajeria">
        <Mensajeria></Mensajeria>
      </Route>
      <Route path="/calendario-academico">
        <Calendar></Calendar>
      </Route>
    </ChakraProvider>
  );
}

export default App;
