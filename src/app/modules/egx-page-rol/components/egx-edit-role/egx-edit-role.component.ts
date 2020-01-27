import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as RolesActions from 'src/core/store/actions';
import * as rolesReducer from 'src/core/store/reducers';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CargarRol } from 'src/core/store/actions';
import { Role } from 'src/models/Role';
import { AppState } from 'src/core/store/interface/AppState';
import { getRole } from 'src/core/store/reducers';


@Component({
  selector: 'app-egx-edit-role',
  templateUrl: './egx-edit-role.component.html',
  styleUrls: ['./egx-edit-role.component.css']
})
export class EgxEditRoleComponent implements OnInit {

  validateForm: FormGroup;
  private role$ : Observable<any>;
  private role: Role = {id:'', email: '', avatar:'', first_name:''};
  constructor(
    private fb: FormBuilder,
    private store: Store<rolesReducer.AppState>,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      name: ['', [Validators.required]],
      job: ['']
    });

    this.SetObservable();
    this.GetRoleData();
  }

  SetObservable(){
    this.role$ = this.store.select(getRole)
  }

  GetRoleData(){
    var id = this.route.snapshot.paramMap.get("id");

    const accion = new CargarRol(Number(id));
    this.store.dispatch(accion);
  }

  submitForm(data:any){
    const accion = new RolesActions.CrearRole(data);
    this.store.dispatch(accion);
  }

}
