import React from 'react'
import { Route } from 'wouter'
import Home from "./pages/home/index"
import Login from "./pages/login/index"
import Calendar from "./pages/calendar/index"
import Notas from "./pages/notas/index"
import Mensajeria from "./pages/mensajeria/index"
import Materias from "./pages/materias/index"

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
          <Materias/>
        </Route>
        <Route path="/notas">
          <Notas materia={""}/>
        </Route>
        <Route path="/notas/Matematica">
          <Notas materia={"Matematica"}/>
        </Route>
        <Route path="/notas/Fisica">
          <Notas materia={"Fisica"}/>
        </Route>
        <Route path="/notas/FisicaII">
          <Notas materia={"FisicaII"}/>
        </Route>
        <Route path="/mensajeria">
          <Mensajeria />
        </Route>
        <Route path="/calendario-academico">
          <Calendar />
        </Route>
    </>
  )
}
