import { Route, RouterModule } from '@angular/router';
import { EgxPageUserComponent } from './egx-page-user.component';
import { EgxHomeUserComponent } from './pages/egx-home-user/egx-home-user.component';




export const routes: Route[] = [
    {
        path: '',
        component: EgxPageUserComponent,
        children: [
            {
                path: '',
                component: EgxHomeUserComponent
            },
        ]
    }
];

export const USER_ROUTES = RouterModule.forChild(routes);
