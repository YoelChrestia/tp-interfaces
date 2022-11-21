import { ChakraProvider } from "@chakra-ui/react";
import { Route } from "wouter";
import Home from "./pages/home/index";
import Login from "./pages/login/index";
import Calendar from "./pages/calendar/index";
import Notas from "./pages/notas/index";
import Mensajeria from "./pages/mensajeria/index";
import Materias from "./pages/materias/index";
import "./App.css";
import Layout from "./components/Layout";

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/materias">
          <Materias/>
        </Route>
        <Route path="/notas">
          <Notas/>
        </Route>
        <Route path="/mensajeria">
          <Mensajeria/>
        </Route>
        <Route path="/calendario-academico">
          <Calendar/>
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
