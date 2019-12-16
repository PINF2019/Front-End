import PrivateRoute from './PrivateRoute'

const routes = {
  home: '/home',
  base: '/',
  login: '/login',
  election: '/election',
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
  vComplex: '/votacion/complex/votar',
  CensusData: '/censusdata'
}

export { PrivateRoute }

export default routes
