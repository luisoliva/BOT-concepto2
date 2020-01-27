export * from './Role/ReaderRole.actions';
export * from './Role/CreaterRole.action';

import { CargarRoles, CargarRolesFail, CargarRolesSuccess, CargarRol, CargarRolSuccess } from './Role/ReaderRole.actions';
import { CrearRoleSuccess, CrearRole } from './Role/CreaterRole.action';


export type RoleActions =
    CargarRoles |
    CargarRolesFail |
    CargarRolesSuccess |
    CrearRoleSuccess |
    CrearRole|
    CargarRol |
    CargarRolSuccess;