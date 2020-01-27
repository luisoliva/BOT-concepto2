import { IError } from './IError';
import { NzModalService } from 'ng-zorro-antd';


export class Error implements IError{

    constructor(private modalService: NzModalService){}

    Show() {
        console.log("fabrica de mensaje correctos")
    }
}