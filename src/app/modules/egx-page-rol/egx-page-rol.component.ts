import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as RolesActions from '../../../core/store/actions';
import { Router } from '@angular/router';
import { AppState } from 'src/core/store/interface/AppState';

export class roleMode{
  id: number;
  email: string;
  last_name: string;
  avatar: string;
  first_name:string;
}

@Component({
  selector: 'app-egx-page-rol',
  templateUrl: './egx-page-rol.component.html',
  styleUrls: ['./egx-page-rol.component.css'],
  providers: [
  ]
})
export class EgxPageRolComponent implements OnInit {

  constructor(private store: Store<AppState>,  private route: Router) { }

  ngOnInit() {
    this.GetRole();
  }

   GetRole(){
    const accion = new RolesActions.CargarRoles();
    this.store.dispatch(accion);
  }

  handleAdd(){
    console.log("hola")
    // this.route.navigate('/roles');
  }
}
