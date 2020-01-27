import { Notification } from './interfaces/INotification.interface';
import { Success } from 'src/core/shared/Message/Success';

export class ModalService extends Notification {
    Show(response: Success , configuration: any) {
        throw new Error("Method not implemented.");
    }
}