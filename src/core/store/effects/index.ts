
import { RolesEffects } from './Role/ReaderRole.effects';
import { CreateRoleffects } from './Role/CreaterRole.effects';


export const effectsArr: any[] = [ 
    RolesEffects,
    CreateRoleffects];


export * from './Role/ReaderRole.effects';
export * from './Role/CreaterRole.effects';