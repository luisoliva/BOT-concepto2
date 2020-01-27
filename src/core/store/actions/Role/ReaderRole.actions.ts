
import { Action, createAction, props, ActionCreator } from '@ngrx/store';
import { Role } from '../../../../models/Role';

export enum TypeReaderRole {
    CARGAR_ROLES = "[Roles] Cargar Roles",
    CARGAR_ROLES_FAIL = '[Roles] Cargar Roles FAIL',
    CARGAR_ROLES_SUCCESS = '[Roles] Cargar Roles SUCCESS',
    CARGAR_ROL = '[Roles] Cargar Rol',
    CARGAR_ROL_SUCCESS = '[Roles] Cargar Rol Success'
}

export class CargarRoles implements Action {
    readonly type = TypeReaderRole.CARGAR_ROLES;
}

export const cargarRoles = createAction(
    TypeReaderRole.CARGAR_ROLES);
export class CargarRolesFail implements Action {
    readonly type = TypeReaderRole.CARGAR_ROLES_FAIL;

    constructor(public payload: any) { }
}


export const  cargarRolesFail: ActionCreator = createAction(
    TypeReaderRole.CARGAR_ROLES_FAIL,
    props<{payload: any}>()
)

export class CargarRolesSuccess implements Action {
    readonly type = TypeReaderRole.CARGAR_ROLES_SUCCESS;

    constructor(public roles: Role[]) { }
}

export class CargarRol implements Action {
    readonly type = TypeReaderRole.CARGAR_ROL;

    constructor(public roleId: number) { }
}

export class CargarRolSuccess implements Action {
    readonly type = TypeReaderRole.CARGAR_ROL_SUCCESS;

    constructor(public rol: Role) {
    }
}