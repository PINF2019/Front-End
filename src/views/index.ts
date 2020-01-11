//Raíz
import Home from "./Home";
import Login from "./Login";
import PickRoleAdmin from "./PickRole/Admin"; 
import PickRoleSecretary from "./PickRole/Secretary"
import Votacion from "./Votacion";
import Resultados from "./Resultados";
import CensusData from "./CensusData";

import Election from "./Election";

//Menu
import MenuUser from "./Menu/MenuUser"
import MenuAdmin from "./Menu/MenuAdmin";
import MenuSecretary from "./Menu/MenuSecretary";
import MenuButton from "./Menu/MenuButton";
import MenuCrearEleccion from "./Menu/MenuCrearEleccion";
import MenuResultados from "./Menu/MenuResultados";
import Census from "./Menu/Census";

//Secretario
import CrearEleccion from "./Secretary/ProcesoElectoral";

//Admin
import gestionarUsuarios from "./admin/GestionarUsuarios";

// Overlays
import Success from "./Overlays/VotoRegistrado";
import NotFound from "./Overlays/NotFound";
import ProcesoCreadoOverlay from "./Overlays/ProcesoCreado"
import ProcesoModificadoOverlay from "./Overlays/ProcesoModificado"
import ProcesoEliminadoOverlay from "./Overlays/ProcesoEliminado"
import SeguroEliminadoProcesoOverlay from "./Overlays/SeguroEliminadoProceso"
import SeguroEliminadoUsuarioOverlay from "./Overlays/SeguroEliminadoUsuario"
import SeguroPublicacionOverlay from "./Overlays/SeguroPublicacion"
import UsuarioCreadoOverlay from "./Overlays/UsuarioCreado"
import UsuarioEliminadoOverlay from "./Overlays/UsuarioEliminado"
import UsuarioModificadoOverlay from "./Overlays/UsuarioModificado"
import VotoRegistradoOverlay from "./Overlays/VotoRegistrado"

export {
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
  MenuResultados,
  Resultados,
  gestionarUsuarios,
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
  
};
