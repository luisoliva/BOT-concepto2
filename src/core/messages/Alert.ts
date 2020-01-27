import {IAlert} from './interfaces/IAlert.interface';
import {HeaderMessage} from '../../models/HeaderMessage';
import {BusinessRulesError} from './interfaces/segregation/IErrorMessage.interface';
import {NzNotificationService} from 'ng-zorro-antd';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable()
export class AlertService implements IAlert{
  private alert$ = new BehaviorSubject<HeaderMessage>(null);

  constructor(){
    this.alert$ = new BehaviorSubject<HeaderMessage>(null);
    
  }


  public GetAlert(): Observable<HeaderMessage> {
    return this.alert$.asObservable();
  }

  error(businessRules: BusinessRulesError[] ) {
    let message = '';
    businessRules.forEach(item => {
      message += `* ${item.ErrorMessage}`;
    });
    this.alert$.next({type: 'error', message});
  }

  success(contentMessage: HeaderMessage) {
    this.alert$.next(contentMessage);
  }

}
