import {ISuccessMessage} from './segregation/ISuccessMessage.interface';
import {IErrorMessage} from './segregation/IErrorMessage.interface';
import { InjectionToken } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HeaderMessage } from 'src/models/HeaderMessage';

export const ALERT_SERVICE = new InjectionToken<IAlert>('ALERT_SERVICE');
export interface IAlert extends ISuccessMessage, IErrorMessage{
   // GetAlert(): BehaviorSubject<HeaderMessage>;
}
