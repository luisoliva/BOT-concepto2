import { Routes, RouterModule } from '@angular/router';
import { EgxAdminRoleComponent } from './components/egx-admin-role/egx-admin-role.component';
import { EgxEditRoleComponent } from './components/egx-edit-role/egx-edit-role.component';
import { EgxFormComponent } from './components/egx-form/egx-form.component';
import { EgxHomeRoleComponent } from './components/egx-home-role/egx-home-role.component';
import { EgxPageRolComponent } from './egx-page-rol.component';

export const RoleRoutes: Routes = [
    {
        path: '',
        component: EgxPageRolComponent,
        children: [
            {path: '', component: EgxHomeRoleComponent},
            { path: 'add', component: EgxAdminRoleComponent },
            { path: 'edit/:id', component: EgxEditRoleComponent },
            { path: 'form-demo', component: EgxFormComponent }]
    }
];


export const ROL_ROUTES = RouterModule.forChild(RoleRoutes); 