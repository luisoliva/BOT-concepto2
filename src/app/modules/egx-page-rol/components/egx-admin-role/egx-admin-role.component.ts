import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as RolesActions from 'src/core/store/actions';
import { AppState } from 'src/core/store/interface/AppState';
import { TranslateService } from '@ngx-translate/core';
import { UserType } from 'src/models/enums/UserType.enum';
// import * as RolesActions from 'src/ ../../../../core/store/actions';


@Component({
  selector: 'app-egx-admin-role',
  templateUrl: './egx-admin-role.component.html',
  styleUrls: ['./egx-admin-role.component.css']
})
export class EgxAdminRoleComponent implements OnInit {

  validateForm: FormGroup;
  users: any[] = [];
  selectedValue: UserType;
  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      name: ['', [Validators.required]],
      job: ['', [Validators.required]],
    });
    this.createSelect();
  }



  submitForm(data: any) {
    const accion = new RolesActions.CrearRole({id: null ,first_name:"habib",avatar:"sddsad", email:"sadads"});

    this.store.dispatch(accion);
  }

  createSelect() {
    this.translate.stream('notification').subscribe(
      console.log
    )
    this.translate.stream('Select').subscribe(
      res => {
        this.users = [];
        for (let user in UserType) {

          if (isNaN(Number(user))) {
            console.log("Type", res[user]);

            this.users.push({ text: res[user], value: UserType[user] });
          }

        }
      }
    )

  }

}
