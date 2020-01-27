import { IError } from './IError';
import { NzModalService } from 'ng-zorro-antd';
import { Injectable } from '@angular/core';
import { IErrorResponse } from 'src/models/ErrorResponse';

@Injectable()
export class Error404 implements IError {
    constructor(private modalService: NzModalService){}

    Show(response: IErrorResponse) {
        this.modalService.error({
            nzTitle: response.statusText,
            nzContent: response.message
          });
    }
}