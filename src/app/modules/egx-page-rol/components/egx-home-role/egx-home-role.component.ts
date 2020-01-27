import { Component, OnInit, Inject, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { PageGenericService } from '../../pages/page-generic/PageGeneric.service';
import { AlertService } from 'src/core/messages/Alert';
import { PanelActionService } from '../panel-action/PanelAction.service';
import { ValidatorFn, AbstractControl, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { UserRole } from '../egx-list-users/egx-list-users.component';
import { AssignIdRequest } from '../egx-list-users/ListService.service';

@Component({
  selector: 'egx-home-role',
  templateUrl: './egx-home-role.component.html',
  styleUrls: ['./egx-home-role.component.css'],
  providers: [
    PageGenericService,
    AlertService,
    PanelActionService
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EgxHomeRoleComponent implements OnInit {
  private loading$: Observable<any>;
  private formUser: FormGroup;
  private _users: AssignIdRequest[] = [];
  constructor(
    private page: PageGenericService,
    private _fb: FormBuilder,
    private cdRef: ChangeDetectorRef

  ) {
    this.formUser = this._fb.group({
      name: ['', Validators.required],
      last_name: ['',Validators.required]
    }
    );
  }

  ngOnInit() {
    this.page.Create(
      () => this.OnSubmit('habib'),
      () => this.Discard('prueba 2'));
    //this.IsValidForm();
  }

  OnSubmit(nombre: string) {
    console.log('soy el componente hijo', 'sdfsdfd', nombre)
    this.page.ShowAlertSuccess({ message: '' })
  }

  Discard(nombre: string) {
    console.log('soy el componente hijo 2', 'sdfsdfd', nombre)
  }
  get users() {
    return this.formUser.get('users') as FormArray;
  }

  get IsValidForm(): boolean {
    console.log('me valide', this._users.length)
    return  this.formUser.valid && this._users.length > 0;
  }

  setUsers(usersAssigned: AssignIdRequest[]) {
    console.log('desde el padre', usersAssigned);
    this._users = [...usersAssigned];
    //this.IsValidForm();
  }

}


export function arrayValid(minLength: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const array = control.value as Array<any>;
    return array.length < minLength ? { 'arrayError': { 'message': `Se deben de elegir mas de ${minLength}` } } : null;
  };
}