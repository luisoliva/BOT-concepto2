import { Injectable, OnInit } from '@angular/core';
import { AlertService } from 'src/core/messages/Alert';
import { Observable } from 'rxjs';
import { HeaderMessage } from 'src/models/HeaderMessage';
import { PanelActionService } from '../../components/panel-action/PanelAction.service';

@Injectable()
export class PageGenericService {

    constructor(
        private alert: AlertService,
        private panelActions: PanelActionService

    ) {
    }
    Create(okFunction, discardFunction) {
        this.panelActions.Create(okFunction, discardFunction)
    }
    GetAlert(): Observable<HeaderMessage> {
        return this.alert.GetAlert();
    }

    ShowAlertSuccess(message: HeaderMessage) {
        this.alert.success(message);
    }

    ShowAlertError() {
        this.alert.error([]);
    }


}