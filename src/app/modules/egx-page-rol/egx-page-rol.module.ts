import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EgxTableComponent } from "./components/egx-table/egx-table.component";
import { EgxAdminRoleComponent } from "./components/egx-admin-role/egx-admin-role.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { EgxEditRoleComponent } from "./components/egx-edit-role/egx-edit-role.component";
import { EgxFormComponent } from "./components/egx-form/egx-form.component";
import { NzButtonModule } from "ng-zorro-antd/button";
import { RouterModule } from "@angular/router";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzRadioModule } from "ng-zorro-antd/radio";
import { NzInputModule } from "ng-zorro-antd/input";
import { SharedModule } from "src/app/shared/shared.module";
import { NgZorroAntdModule, NzFormModule } from "ng-zorro-antd";
import { TranslateModule } from "@ngx-translate/core";
import { ROL_ROUTES } from './egx-page-rol-routing.module';
import { EgxPageRolComponent } from './egx-page-rol.component';
import { EgxHomeRoleComponent } from './components/egx-home-role/egx-home-role.component';
import { EffectsModule } from '@ngrx/effects';
import { effectsArr } from 'src/core/store/effects';
import { StoreModule } from '@ngrx/store';
import { RolesReducer } from 'src/core/store/reducers';
import { ROLE_SERVICE } from 'src/services/interfaces/IRoleService.interface';
import { REPO_ROLE } from 'src/repository/Interfaces/IRoleRepository.interface';
import { RoleRepository } from 'src/repository/roles/RoleRepository.repository';
import { RoleService } from 'src/services/RoleService.service';
import { BASE_SERVICE } from 'src/services/interfaces/IServiceBase.interface';
import { ServiceWebApi } from 'src/services/ServiceBase';
import { EgxListUsersComponent } from './components/egx-list-users/egx-list-users.component';
import { SearchComponent } from './components/search/search.component';
import { PageGenericComponent } from './pages/page-generic/page-generic.component';
import { PanelActionComponent } from './components/panel-action/panel-action.component';
import { EgobXAlertComponent } from './components/egob-xalert/egob-xalert.component';


@NgModule({
  declarations: [
  EgxTableComponent,
  EgxAdminRoleComponent,
  EgxEditRoleComponent,
  EgxPageRolComponent,
  EgxFormComponent,
  EgxHomeRoleComponent,
  EgxListUsersComponent,
  SearchComponent,
  PageGenericComponent,
  PanelActionComponent,
  EgobXAlertComponent
],
  imports: [
    EffectsModule.forFeature( effectsArr ),
    StoreModule.forFeature('roles', RolesReducer ),
    RouterModule,
    CommonModule,
    ROL_ROUTES,
    ReactiveFormsModule,
    NzFormModule,
    TranslateModule,
    NgZorroAntdModule,
    FormsModule,
    NzButtonModule,
    NzTableModule,
    NzRadioModule,
    NzInputModule,
    SharedModule
  ],
  providers:[
    {provide: ROLE_SERVICE,
      useClass: RoleService
    },

  ]
})
export class EgxPageRolModule {}
