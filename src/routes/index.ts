import PrivateRoute from './PrivateRoute'

const routes = {
  home: '/home',
  base: '/',
  login: '/login',
  menuElection: '/election',
  election: '/election/vote',
  pickrole: '/pickrole',
  admin: '/admin',
  secretary: '/secretary',
  user: '/user',
  census: '/census',
  success: '/success',
  menuVotacion: '/votacion',
  menuVotacionS: '/votacion/simple',
  menuVotacionC: '/votacion/compleja',
  vSimple: '/votacion/simple/votar',
  vComplex: '/votacion/compleja/votar',
  menuCrearEleccion: '/secretary/procesoElectoral/crear',
  menuEleccionAdmin: '/secretary/procesoElectoral',
  crearEleccionP: '/secretary/procesoElectoral/crear/ponderada',
  crearEleccion: '/secretary/procesoElectoral/crear/unipersonal'
}

export { PrivateRoute }

export default routes
