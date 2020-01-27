import {Component, OnInit, Inject} from '@angular/core';
import {USER_PROVIDERS} from './egx-page-user.providers';
import {NotificationService} from '../../../core/messages/Notification.service';
import {ActionsNotification, INotificationService, NOTIFICATION_TOKEN} from '../../../core/messages/interfaces/INotification.service';
import {HeaderMessage} from '../../../models/HeaderMessage';
import { ALERT_SERVICE, IAlert } from 'src/core/messages/interfaces/IAlert.interface';
import { BusinessRulesError } from 'src/core/messages/interfaces/segregation/IErrorMessage.interface';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-egx-page-user',
  templateUrl: './egx-page-user.component.html',
  styles: [],
  providers: [
    USER_PROVIDERS,
    {
    provide: NOTIFICATION_TOKEN,
    useClass: NotificationService
    }
  ]
})
export class EgxPageUserComponent implements OnInit {
  // constructor(@Inject(USER_SERVICE) private service : IUserAccountService) { }
  private message: HeaderMessage;

  
  constructor(
    @Inject(NOTIFICATION_TOKEN) private notificationService: INotificationService,
    @Inject(ALERT_SERVICE) private alert: IAlert,
    private translate : TranslateService
    ){

  }

  async ngOnInit() {
    this.translate.stream('user').subscribe(
      res=> {
        console.log(res);
        this.message = {title: res.title,
        message: res.message
        };
      }
    )
  }

  confirmModal(){


    let actions: ActionsNotification = {
      okFunction: () => this.successNotification(true),

    };

    this.notificationService.confirm(this.message,actions)
  }

  alertModal(tipo: string){
    let message: HeaderMessage = {
      message: 'Esta es una prueba de concetop' ,
      type: tipo
    };
    if(tipo == 'success'){
    this.alert.success(message);
    }else {
      let bussinesError: BusinessRulesError[] = [
        {
          ErrorMessage: 'hay un error'
        },
        {
          ErrorMessage: 'hay otro error'
        },
        {
          ErrorMessage: 'hay otro otro error'
        }
      ]
      this.alert.error(bussinesError);
    }
  }


  successNotification(boolean: boolean){
    let message: HeaderMessage = {
      message: 'titulo del mensaje imprimiendo un parámetro con valor ' + boolean,
      type: 'Notificación success'
    };

    this.notificationService.success(message);
  }
}
