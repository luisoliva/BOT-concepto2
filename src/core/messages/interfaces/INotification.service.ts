import {HeaderMessage} from '../../../models/HeaderMessage';
import {ISuccessMessage} from './segregation/ISuccessMessage.interface';
import {IConfirmMessage} from './segregation/IConfirmMessage.interface';
import {InjectionToken} from '@angular/core';

export class ActionsNotification{
  okFunction: () => void;
  discardFunction?: () => void;
}

export const NOTIFICATION_TOKEN = new InjectionToken<INotificationService>('NOTIFICATION_TOKEN');

export interface INotificationService extends ISuccessMessage, IConfirmMessage {
}
