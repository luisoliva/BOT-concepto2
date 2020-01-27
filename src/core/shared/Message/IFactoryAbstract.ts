import { Message } from '@angular/compiler/src/i18n/i18n_ast'
import { ISuccess } from './ISuccess';
import { IError } from './IError';
import { NzModalService } from 'ng-zorro-antd';


export interface IFactoryAbstract {
    MessageError(res: number, modalService: NzModalService): IError;
    MessageSuccess(res: number, modalService: NzModalService): ISuccess;
}
