const routes = {
  home: '/home',
  base: '/',
  login: '/login',
  pickroleadmin: '/pickroleadmin',
  pickrolesecretary: '/pickrolesecretary',
  votacion: '/votacion/:id',
  resultsElection:'/resultados/election/:id',
  resultsPoll:'/resultados/poll/:id',
  censusData: '/census/:id',

  election: '/election/vote', // hay que quitarlo
  menuElection: '/election',

  user: '/user',
  admin: '/admin',
  secretary: '/secretary',
  menuCrearEleccion: '/secretary/procesoElectoral/crear',
  menuResultados: '/resultados',
  menuCensus: '/census',
  modificarProcesoElectoral: '/secretary/procesoElectoral/modificar',
  eliminarProcesoElectoral: '/secretary/procesoElectoral/modificar',

  crearEleccion: '/secretary/procesoElectoral/crear/eleccion',
  crearVotacion: '/secretary/procesoElectoral/crear/votacion',

  gestionarUsuarios: '/admin/GestionarUsuarios',
  adduser: '/admin/adduser',
  modifyusertable: '/admin/modifyusertable',
  modifyuser: '/admin/modifyuser/:id/:name/:lastnames/:sex/:rol',
  deleteusertable: '/admin/deleteusertable',

  success: '/success',
  notFound: '/404',
  // Esto deberian ser pop ups pero por ahora se queda así
  procesoCreado: '/procesoCreado',
  procesoModificado: '/procesoModificado',
  procesoEliminado: '/procesoEliminado',
  seguroEliminadoProceso: '/seguroEliminadoProceso',
  seguroEliminadoUsuario: '/seguroEliminacionUsuario',
  seguroPublicacion: '/seguroPublicacion',
  usuarioCreado: '/usuarioCreado',
  usuarioEliminado: '/usuarioEliminado',
  usuarioModificado: '/usuarioModificado',
  votoRegistrado: '/votoRegistrado',
}

export default routes
