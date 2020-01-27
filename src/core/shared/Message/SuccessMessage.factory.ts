import { IFactoryAbstract } from './IFactoryAbstract';
import { IError } from './IError';
import { ISuccess } from './ISuccess';
import { Success200 } from './Success200';
import { Success201 } from './success201';
import { NzModalService } from 'ng-zorro-antd';


export class SuccessMessage implements IFactoryAbstract{

    MessageError(res: number): IError {
        throw new Error("Method not implemented.");
    }

    MessageSuccess(res: number, modalService: NzModalService): ISuccess {
        if(res == 200){
            return new Success200(modalService);
        }else if(res == 201){
            console.log(res)
            return new Success201(modalService);
        }
    }


}