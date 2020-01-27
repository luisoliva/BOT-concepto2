import { IError } from './IError';
import { NzModalService } from 'ng-zorro-antd';
import { IErrorResponse } from 'src/models/ErrorResponse';

export class Error500 implements IError {
    constructor(private modalService: NzModalService){}

    Show(response: IErrorResponse) {
        this.modalService.error({
            nzTitle: response.statusText,
            nzContent: response.message
          });
    }
}