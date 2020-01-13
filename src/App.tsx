import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "@Components/Layout";
import routes, { PrivateRoute } from "@Routes";

import {
  Login,
  Home,
  Election,
  PickRoleAdmin,
  PickRoleSecretary,
  Census,
  MenuAdmin,
  MenuSecretary,
  MenuUser,
  MenuButton,
  Votacion,
  Success,
  MenuCrearEleccion,
  CrearEleccion,
  CrearVotacion,
  MenuResultados,
  Resultados,
  gestionarUsuarios,
  AddUser, 
  ModifyUserTable, 
  ModifyUser, 
  DeleteUserTable,
  CensusData,
  NotFound,
  ProcesoCreadoOverlay,
  ProcesoModificadoOverlay,
  ProcesoEliminadoOverlay,
  SeguroEliminadoProcesoOverlay,
  SeguroEliminadoUsuarioOverlay,
  SeguroPublicacionOverlay,
  UsuarioCreadoOverlay,
  UsuarioModificadoOverlay,
  UsuarioEliminadoOverlay,
  VotoRegistradoOverlay
  
  
} from "@Views";

//        <Route exact path={routes.user} component={MenuUser} />

const Protected = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path={routes.base} component={Home} />
<Route exact path={routes.pickroleadmin} component={PickRoleAdmin} />
<Route exact path={routes.pickrolesecretary} component={PickRoleSecretary} />
<Route exact path={routes.resultados} component={Resultados} />
<Route exact path={routes.censusData} component={CensusData} />
<Route exact path={routes.votacion} component={Votacion} />



<Route exact path={routes.user} component={MenuUser} />
<Route exact path={routes.admin} component={MenuAdmin} />
<Route exact path={routes.secretary} component={MenuSecretary} />
<Route
  exact
  path={routes.menuCrearEleccion}
  component={MenuCrearEleccion}
/>
<Route exact path={routes.menuResultados} component={MenuResultados} />
<Route exact path={routes.menuCensus} component={Census} />



<Route exact path={routes.election} component={Election} />
<Route exact path={routes.notFound} component={NotFound} />



<Route
  exact
  path={routes.crearEleccion}
  component={CrearEleccion}
/> 
<Route
  exact
  path={routes.crearVotacion}
  component={CrearVotacion}
/> 


 <Route exact path={routes.gestionarUsuarios} component={gestionarUsuarios}/>
 <Route exact path={routes.adduser} component={AddUser} />
 <Route exact path={routes.modifyusertable} component={ModifyUserTable} />
 <Route exact path={routes.modifyuser} component={ModifyUser} />
 <Route exact path={routes.deleteusertable} component={DeleteUserTable} />



<Route exact path={routes.success} component={Success} />
<Route exact path={routes.notFound} component={NotFound} />
<Route exact path={routes.procesoCreado} component={ProcesoCreadoOverlay} />
<Route exact path={routes.procesoModificado} component={ProcesoModificadoOverlay} />
<Route exact path={routes.procesoEliminado} component={ProcesoEliminadoOverlay} />
<Route exact path={routes.seguroEliminadoProceso} component={SeguroEliminadoProcesoOverlay} />
<Route exact path={routes.seguroEliminadoUsuario} component={SeguroEliminadoUsuarioOverlay} />
<Route exact path={routes.seguroPublicacion} component={SeguroPublicacionOverlay} />
<Route exact path={routes.usuarioCreado} component={UsuarioCreadoOverlay} />
<Route exact path={routes.usuarioEliminado} component={UsuarioEliminadoOverlay} />
<Route exact path={routes.usuarioModificado} component={UsuarioModificadoOverlay} />
<Route exact path={routes.votoRegistrado} component={VotoRegistradoOverlay} />



      </Switch>
    </Layout>
  );
};


//tiene orden de prioridad el switch ese
const App = () => {
  return (
    <Switch>
      <Route exact path={routes.login} component={Login} />
      <PrivateRoute component={Protected} />
    </Switch>
  );
};

export default App;
