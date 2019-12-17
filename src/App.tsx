import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "@Components/Layout";
import {
  Login,
  Home,
  ElectionView,
  PickRole,
  Census,
  MenuAdmin,
  MenuSecretary,
  MenuUser,
  VotacionSimple,
  MenuVotacionSimple,
  MenuVotacionCompleja,
  VotacionCompleja,
  Success,
  MenuVotacion,
  Election,
  MenuCrearEleccion,
  MenuElecciones,
  GenerarEleccionView,
  MenuResultados,
  ResultadosElecciones,
  ResultadosVotaciones,
  CensusData,
  NotFound
} from "@Views";
import routes, { PrivateRoute } from "@Routes";
import CrearEleccionPonderada from "./views/Secretary/EleccionPonderada";
import Estadisticos from "./views/Estadistica";
import gestionarUsuarios from "./views/admin/GestionarUsuarios";

const Protected = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path={routes.base} component={Home} />
      </Switch>
    </Layout>
  );
};
//Cambiado la ruta base por menu de usuario
const Dev = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path={routes.home} component={MenuUser} />
        <Route exact path={routes.menuElection} component={ElectionView} />
        <Route exact path={routes.pickrole} component={PickRole} />
        <Route exact path={routes.admin} component={MenuAdmin} />
        <Route exact path={routes.secretary} component={MenuSecretary} />
        <Route exact path={routes.user} component={MenuUser} />
        <Route exact path={routes.census} component={Census} />
        <Route exact path={routes.election} component={Election} />
        <Route exact path={routes.censusData} component={CensusData} />
        <Route exact path={routes.notFound} component={NotFound} />
        <Route exact path={routes.menuCrearEleccion} component={MenuCrearEleccion} />
        <Route exact path={routes.menuEleccionAdmin} component={MenuElecciones} />
        <Route exact path={routes.crearEleccionP} component={CrearEleccionPonderada} />
        {/* <Route
          exact
          path={routes.crearEleccion}
          component={GenerarEleccionView}
        /> */}
        <Route exact path={routes.menuVotacion} component={MenuVotacion} />
        <Route exact path={routes.menuVotacionC} component={MenuVotacionCompleja} />
        <Route exact path={routes.vSimple} component={VotacionSimple} />
        <Route exact path={routes.vComplex} component={VotacionCompleja} />
        <Route exact path={routes.menuVotacionS} component={MenuVotacionSimple} />
        <Route exact path={routes.success} component={Success} />
        <Route exact path={routes.menuResultados} component={MenuResultados} />
        <Route exact path={routes.resultadosEleccion} component={ResultadosElecciones} />
        <Route exact path={routes.resultadosVotacion} component={ResultadosVotaciones} />
        <Route exact path={routes.estadisticas} component={Estadisticos} />
        <Route exact path={routes.gestionarUsuarios} component={gestionarUsuarios} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
};

//tiene orden de prioridad el switch ese
const App = () => {
  return (
    <Switch>
      <Route exact path={routes.base} component={Login} />
      <Route component={Dev} />
      <PrivateRoute component={Protected} />
    </Switch>
  );
};

export default App;
