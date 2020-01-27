import { RolesState } from '../../interface/RoleState';
import { TypeReaderRole, TypeCreaterRole, RoleActions, CrearRole } from '../../actions';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Role } from 'src/models/Role';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../interface/AppState';

export interface AppState extends AppState {
    roles: RolesState;
}

export const roleAdapter: EntityAdapter<Role> = createEntityAdapter<Role>();

export const defaultRole: RolesState = {
    ids: [],
    entities: {},
    loaded: false,
    loading: true,
    error: false,
    role: null
}


export const initialState = roleAdapter.getInitialState(defaultRole);

export function RolesReducer(state = initialState, action: RoleActions): RolesState {

    switch (action.type) {
        case TypeReaderRole.CARGAR_ROL:
            return {
                ...state,
                loading: true,
                error: null
            };

        case TypeReaderRole.CARGAR_ROLES_SUCCESS: {

            return roleAdapter.addAll(action.roles, {
                ...state,
                loaded: true,
                loading: false
            });
        }
        case TypeReaderRole.CARGAR_ROLES_FAIL:
            return {
                ...state,
                loaded: false,
                loading: false,
                error: {
                    status: action.payload.status,
                    message: action.payload.message,
                    url: action.payload.url,
                    headers: action.payload.headers
                }
            };

        case TypeCreaterRole.CREAR_ROLES:
            return {
                ...state,
                loading: true,
                error: null
            };

        case TypeCreaterRole.CREAR_ROLES_SUCCESS: {
            return roleAdapter.addOne(action.rol, {
                ...state,
                loading: false,
                loaded: true,
            });
        }
        case TypeReaderRole.CARGAR_ROL:
            return {
                ...state,
                loading: true,
                loaded: false,
                error: null
            };

        case TypeReaderRole.CARGAR_ROL_SUCCESS:
            return {
                ...state,
                loaded: true,
                loading: false,
                role: action.rol
            }

        default:
            return state;
    }
}


export const getState = (state) => state;
export const getRolesState = createFeatureSelector<RolesState>('roles');

export const getCustomers = createSelector(getRolesState,
    roleAdapter.getSelectors().selectAll);
export const getCustomersLoading = createSelector(getRolesState,
    (state: RolesState) => state.loading);

export const getRole = createSelector(getRolesState,
    (state: RolesState) => state.role
    );

