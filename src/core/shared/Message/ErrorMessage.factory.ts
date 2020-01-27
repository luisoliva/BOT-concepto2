import { IFactoryAbstract } from './IFactoryAbstract';
import { IError } from './IError';
import { ISuccess } from './ISuccess';
import { Error500 } from './Error500';
import { Error400 } from './Error400';
import { Error404 } from './Error404';
import { NzModalService } from 'ng-zorro-antd';


export class ErrorMessage implements IFactoryAbstract {
    MessageError(res: number, modalService: NzModalService): IError {
        if (res === 500) {
            return new Error500(modalService);
        } else if (res === 400) {
            return new Error400(modalService);
        }else if(res == 404){
            return new Error404(modalService);
        }
    }

    MessageSuccess(res: number): ISuccess {
        return null;
    }
}