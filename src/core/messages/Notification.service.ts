import {NzModalService, NzNotificationService} from 'ng-zorro-antd';
import {ActionsNotification, INotificationService} from './interfaces/INotification.service';
import {HeaderMessage} from '../../models/HeaderMessage';
import {Injectable} from '@angular/core';

@Injectable()
export class NotificationService implements INotificationService{
  constructor(private modalService: NzModalService, private notificationService: NzNotificationService){}

  success(contentMessage: HeaderMessage) {
    this.notificationService.success(contentMessage.type, contentMessage.message);
  }

  confirm(contentMessage: HeaderMessage, actionsNotifications: ActionsNotification) {
    console.log(contentMessage);
    this.modalService.create({
      nzTitle: contentMessage.title,
      nzContent: contentMessage.message,
      nzOnOk: actionsNotifications.okFunction,
      nzOnCancel: actionsNotifications.discardFunction
    })
  }
}

