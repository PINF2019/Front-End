//Raíz
import AddUser from "./admin/AddUser";
import DeleteUserTable from "./admin/DeleteUserTable";
//Admin
import gestionarUsuarios from "./admin/GestionarUsuarios";
import ModifyUser from "./admin/ModifyUser";
import ModifyUserTable from "./admin/ModifyUserTable";
import CensusData from "./CensusData";
import Election from "./Election";
import Home from "./Home";
import Login from "./Login";
import Logo from "./Logo";
import Census from "./Menu/Census";
import MenuAdmin from "./Menu/MenuAdmin";
import MenuButton from "./Menu/MenuButton";
import MenuCrearEleccion from "./Menu/MenuCrearEleccion";
import MenuResultados from "./Menu/MenuResultados";
import MenuSecretary from "./Menu/MenuSecretary";
import MenuEliminarElecciones from "./Menu/MenuSecretary/MenuEliminarElecciones";
import MenuModificarElecciones from "./Menu/MenuSecretary/MenuModificarElecciones";
//Menu
import MenuUser from "./Menu/MenuUser";
import NotFound from "./Overlays/NotFound";
import ProcesoCreadoOverlay from "./Overlays/ProcesoCreado";
import ProcesoEliminadoOverlay from "./Overlays/ProcesoEliminado";
import ProcesoModificadoOverlay from "./Overlays/ProcesoModificado";
import SeguroEliminadoProcesoOverlay from "./Overlays/SeguroEliminadoProceso";
import SeguroEliminadoUsuarioOverlay from "./Overlays/SeguroEliminadoUsuario";
import SeguroPublicacionOverlay from "./Overlays/SeguroPublicacion";
import UsuarioCreadoOverlay from "./Overlays/UsuarioCreado";
import UsuarioEliminadoOverlay from "./Overlays/UsuarioEliminado";
import UsuarioModificadoOverlay from "./Overlays/UsuarioModificado";
// Overlays
import {
  default as Success,
  default as VotoRegistradoOverlay
} from "./Overlays/VotoRegistrado";
import PickRoleAdmin from "./PickRole/Admin";
import PickRoleSecretary from "./PickRole/Secretary";
import Resultados from "./Resultados";
//Secretario
import CrearEleccion from "./Secretary/Crear/ProcesoElectoral";
import CrearVotacion from "./Secretary/Crear/Votación";
import Votacion from "./Votacion";

export {
  Login,
  Logo,
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
  MenuModificarElecciones,
  MenuEliminarElecciones,
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
};
