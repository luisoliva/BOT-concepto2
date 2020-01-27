import { ISuccess } from './ISuccess';
import { NzModalService } from 'ng-zorro-antd';
import { ISuccessReponse } from 'src/models/SuccessResponse';


export class Success201 implements ISuccess{
    constructor(private modalService: NzModalService){}

    Show(response: ISuccessReponse) {
        this.modalService.success({
            nzTitle: response.statusText,
            nzContent: response.headers["message"]
          });
    }
}