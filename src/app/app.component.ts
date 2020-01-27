import { Component, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/core/store/interface/AppState';
import { TranslateService } from '@ngx-translate/core';
import { IAlert, ALERT_SERVICE } from 'src/core/messages/interfaces/IAlert.interface';
import { HeaderMessage } from 'src/models/HeaderMessage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
  lstLanguage = [];
  private loading: boolean;
  message: HeaderMessage = null;
  constructor(
    private translate: TranslateService,
    private store: Store<AppState>,
  ) {

    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('es');
    this.translate.addLangs(['es', 'en']);
    this.lstLanguage = this.translate.getLangs();
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use('es');
    this.translate.stream(['Name', 'Label']).subscribe(
      console.log
    )
  }
  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}
