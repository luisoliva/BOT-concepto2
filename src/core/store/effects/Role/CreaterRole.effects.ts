import { Injectable, Inject } from '@angular/core';
import { Effect, Actions, ofType, createEffect } from '@ngrx/effects';

import * as RolesActions from '../../actions';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Role } from '../../../../models/Role';
import { TypeCreaterRole } from '../../actions';
import { FactoriryMessage } from 'src/core/shared/Message/FactoryMessage';
import { NzModalService } from 'ng-zorro-antd';

import { ROLE_SERVICE, IRoleService } from 'src/services/interfaces/IRoleService.interface';

@Injectable()
export class CreateRoleffects {

    constructor(
        private actions$: Actions,
        @Inject(ROLE_SERVICE) private RolesService: IRoleService,
        private modalService: NzModalService
    ) { }

    // roleCreated$ = createEffect(() => this.actions$.pipe(
    //     ofType(TypeCreaterRole.CREAR_ROLES),
    //     switchMap((action: RolesActions.CrearRole) => {
    //         return this.RolesService.Create(action.rol)
    //             .pipe(map(response => {
    //                  FactoriryMessage.getFactory("success").MessageSuccess(response.status, this.modalService).Show(response);
    //                 return new RolesActions.CrearRoleSuccess(new Role(response.data.id, response.data.email, response.data.first_name, response.data.avatar));
    //             }), catchError(error => {
    //                 FactoriryMessage.getFactory("error").MessageError(error.status, this.modalService).Show(error);
    //                 return of(new RolesActions.CargarRolesFail(error));
    //             })
    //             );
    //     })
    // ))
}
