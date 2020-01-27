import { Injectable, Inject } from '@angular/core';
import { Effect, Actions, ofType, createEffect } from '@ngrx/effects';

import * as AppActions from '../../actions';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { TypeReaderRole } from '../../actions';
import { Role } from '../../../../models/Role';
import { FactoriryMessage } from 'src/core/shared/Message/FactoryMessage';
import { NzModalService } from 'ng-zorro-antd';
import { ROLE_SERVICE, IRoleService } from 'src/services/interfaces/IRoleService.interface';

@Injectable()
export class RolesEffects {

    constructor(
        private actions$: Actions,
        @Inject(ROLE_SERVICE) private RolesService: IRoleService,
        private modalService: NzModalService
    ) { }
 //#region CREATE
    FindById$ = createEffect(() => this.actions$.pipe(
        ofType(TypeReaderRole.CARGAR_ROL),
        switchMap((accion) => {
            return this.RolesService.GetById(accion['roleId'])
                .pipe(
                    map(response => {
                        const data = response.data;
                        return new AppActions.CargarRolSuccess(new Role(data["id"], data["email"], data["first_name"], data["last_name"]))
                    }),
                    catchError(error => {
                        FactoriryMessage.getFactory("error").MessageError(error.status, this.modalService).Show(error);
                        return of(new AppActions.CargarRolesFail(error));
                    })
                );
        })
    ))
//#endregion

cargarRoles$ = createEffect(() => this.actions$.pipe(
        ofType(TypeReaderRole.CARGAR_ROLES),
        switchMap(() => {
            return this.RolesService.GetAll(null,null)
                .pipe(
                    map((response) => {
                        return new AppActions.CargarRolesSuccess(response.data);
                    }),
                    catchError(error => {
                        FactoriryMessage.getFactory("error").MessageError(error.status, this.modalService).Show(error);
                        return of(new AppActions.CargarRolesFail(error));
                    })
                )
        })
    ))
}
