import {ActionsNotification} from '../INotification.service';
import {HeaderMessage} from '../../../../models/HeaderMessage';

export interface IConfirmMessage {
  confirm(contentMessage: HeaderMessage, actionsNotifications: ActionsNotification);

}
