import PrivateRoute from "./PrivateRoute";

const routes = {
  home: "/home",
  base: "/",
  login: "/login",
  menuElection: "/election",
  election: "/election/vote",
  pickrole: "/pickrole",
  admin: "/admin",
  secretary: "/secretary",
  //user: "/user",
  census: "/census",
  success: "/success",
  menuVotacion: "/votacion",
  votaion: "/votacion/:id",
  menuVotacionS: "/votacion/simple",
  menuVotacionC: "/votacion/compleja",
  vSimple: "/votacion/simple/votar",
  vComplex: "/votacion/compleja/votar",
  menuCrearEleccion: "/secretary/procesoElectoral/crear",
  menuEleccionAdmin: "/secretary/procesoElectoral",
  crearEleccionP: "/secretary/procesoElectoral/crear/eleccion",
  crearEleccion: "/secretary/procesoElectoral/crear/unipersonal",
  menuResultados: "/resultados",
  resultadosVotacion: "/resultados/votaciones",
  resultadosEleccion: "/resultados/elecciones",
  estadisticas: "/resultados/elecciones/estadisticas", //, 'resultados/votaciones/estadisticas'
  gestionarUsuarios: "/admin/GestionarUsuarios",
  censusData: "/census/data",
  notFound: "/404",
  pendantVotation: "/user"
};

export { PrivateRoute };

export default routes;
