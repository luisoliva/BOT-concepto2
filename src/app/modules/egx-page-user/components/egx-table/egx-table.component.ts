import { Component, OnInit, Inject, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { CrearRole, CargarRol } from 'src/core/store/actions';
import { AppState } from 'src/core/store/interface/AppState';

@Component({
  selector: 'egx-table',
  templateUrl: './egx-table.component.html',
  styleUrls: ['./egx-table.component.css'],
  providers: [
  ]
})
export class EgxTableComponent implements OnInit {

  pageIndex = 1;
  pageSize = 10;
  total = 1;
  @Input() userAccounts: any = [];
  loading = true;
  prueba = false;
  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    console.log(this.userAccounts)
  }

  SetObservable() {


  }

  cambiaLoading() {

  }

  ShearchRol(roleId: number) {
  }
}
