import { HeaderMessage } from 'src/models/HeaderMessage';
import { IResponse } from '../interfaces/IResponse.interfaces';
import { HttpResponse } from '@angular/common/http';
import { IPagination } from 'src/core/specification/interface/IPagination';

export class OkResponse<T> implements IResponse {
    constructor(public status: number, public headerMessage: HeaderMessage,public data: T ,public paginate: IPagination){
    }
}
