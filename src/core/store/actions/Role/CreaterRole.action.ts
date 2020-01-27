import { Action } from '@ngrx/store';
import { Role } from '../../../../models/Role';

export enum TypeCreaterRole {
    CREAR_ROLES = '[Roles] Crear Roles',
    CREAR_ROLES_FAIL = '[Roles] Crear Roles FAIL',
    CREAR_ROLES_SUCCESS = '[Roles] Crear Roles SUCCESS'
}

export class CrearRole implements Action {
    readonly type = TypeCreaterRole.CREAR_ROLES;

    constructor(public rol: Role) { }
}

export class CrearRoleFail implements Action {
    readonly type = TypeCreaterRole.CREAR_ROLES_FAIL;

    constructor(public payload: any) { }
}

export class CrearRoleSuccess implements Action {
    readonly type = TypeCreaterRole.CREAR_ROLES_SUCCESS;

    constructor(public rol: Role) { }
}