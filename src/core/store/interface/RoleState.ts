import { Role } from '../../../models/Role';
import {EntityState} from '@ngrx/entity';
export interface RolesState extends EntityState<Role> {
    ids: string[],
    entities: any,
    loaded: boolean;
    loading: boolean;
    error: any;
    role: Role;
}
