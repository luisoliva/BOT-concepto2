import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { USER_ROUTES } from './egx-page-user.routing.module';
import { EgxHomeUserComponent } from './pages/egx-home-user/egx-home-user.component';
import { EgxPageUserComponent } from './egx-page-user.component';
import { EgxTableComponent } from './components/egx-table/egx-table.component';
import { NzTableModule, NgZorroAntdModule } from 'ng-zorro-antd';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    EgxPageUserComponent,
    EgxHomeUserComponent,
    EgxTableComponent
  ],
  imports: [
    CommonModule,
    USER_ROUTES,
    NzTableModule,
    TranslateModule,
    NgZorroAntdModule
  ]
})
export class EgxPageUserModule { }
