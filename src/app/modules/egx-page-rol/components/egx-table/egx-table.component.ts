import { Component, OnInit, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { roleMode } from '../../egx-page-rol.component';
import { CrearRole, CargarRol } from 'src/core/store/actions';
import { AppState } from 'src/core/store/interface/AppState';
import { Observable } from 'rxjs';


import { getCustomersLoading, getCustomers } from 'src/core/store/reducers';
import * as roleReducer from 'src/core/store/reducers';
import { ROLE_SERVICE, IRoleService } from 'src/services/interfaces/IRoleService.interface';
import { Role } from 'src/models/Role';
@Component({
  selector: 'egx-table',
  templateUrl: './egx-table.component.html',
  styleUrls: ['./egx-table.component.css'],
  providers: [
  ]
})
export class EgxTableComponent  {
  pageIndex = 1;
  pageSize = 10;
  total = 1;
  listOfData: any = [];
  prueba = false;


  lstRoles$: Observable<Role[]> = this.store.select(getCustomers);
  loading$: Observable<boolean> = this.store.select(getCustomersLoading);
  constructor(
    private store: Store<roleReducer.AppState>,
    @Inject(ROLE_SERVICE) private  serviceRole: IRoleService
  ) { }



  ShearchRol(roleId: number) {
    const accion = new CargarRol(roleId);
    this.store.dispatch(accion);
  }
}
