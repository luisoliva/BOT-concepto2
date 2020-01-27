import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// Ng-translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// Componentes
import { AppComponent } from './app.component';
import { HttpClient, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { appReducers } from 'src/core/store/index.reducers';
import { environment } from 'src/environments/environment';
import { effectsArr } from 'src/core/store/effects';
import { AppRoutingModule } from './app-routing.module';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { EgxLoginPageComponent } from './modules/egx-login-page/egx-login-page.component';
import { httpSetHeaders } from 'src/core/interceptor/Message.interceptor';
import { SharedModule } from './shared/shared.module';
import { EgxPageUserModule } from './modules/egx-page-user/egx-page-user.module';
import { EgxPageRolModule } from './modules/egx-page-rol/egx-page-rol.module';
import { LoginGuardService } from 'src/services/loginGuard.service';
import { LoginService } from 'src/services/login.service';
import { ROLE_SERVICE } from 'src/services/interfaces/IRoleService.interface';
import { REPO_ROLE } from 'src/repository/Interfaces/IRoleRepository.interface';
import { RoleRepository } from 'src/repository/roles/RoleRepository.repository';
import { BASE_SERVICE } from 'src/services/interfaces/IServiceBase.interface';
import { ServiceWebApi } from 'src/services/ServiceBase';
import { ALERT_SERVICE } from 'src/core/messages/interfaces/IAlert.interface';
import { AlertService } from 'src/core/messages/Alert';


registerLocaleData(es);
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    EgxLoginPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot( appReducers ),
    EffectsModule.forRoot( effectsArr ),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    BrowserAnimationsModule,
    EgxPageUserModule,
    EgxPageRolModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })

  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: HTTP_INTERCEPTORS, useClass: httpSetHeaders, multi: true },
    LoginGuardService, LoginService,
    {
      provide: BASE_SERVICE,
      useClass: ServiceWebApi
    },
    {
      provide: ALERT_SERVICE,
      useClass: AlertService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
