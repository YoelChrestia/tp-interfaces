import React from "react";
import { Route } from "wouter";
import Home from "./pages/home/index";
import Login from "./pages/login/index";
import Calendar from "./pages/calendar/index";
import Notas from "./pages/notas/index";
import Mensajeria from "./pages/mensajeria/index";
import Materias from "./pages/materias/index";
import Asistencia from "./pages/asistencia";
import Contenido from "./pages/contenido";

export const Router = () => {
  return (
    <>
      <Route path="/">
        <Login />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/materias">
        <Materias />
      </Route>
      <Route path="/materias/Matematica">
        <Asistencia />
      </Route>
      <Route path="/materias/Fisica">
        <Asistencia />
      </Route>
      <Route path="/materias/Química">
        <Asistencia />
      </Route>

      <Route path="/contenido/Matematica">
        <Contenido />
      </Route>
      <Route path="/contenido/Fisica">
        <Contenido />
      </Route>
      <Route path="/contenido/Quimica">
        <Contenido />
      </Route>

      <Route path="/notas">
        <Notas materia={""} />
      </Route>
      <Route path="/notas/Matematica">
        <Notas materia={"Matematica"} />
      </Route>
      <Route path="/notas/Fisica">
        <Notas materia={"Fisica"} />
      </Route>
      <Route path="/notas/Quimica">
        <Notas materia={"Quimica"} />
      </Route>
      <Route path="/mensajeria">
        <Mensajeria />
      </Route>
      <Route path="/calendario-academico">
        <Calendar />
      </Route>
    </>
  );
};
