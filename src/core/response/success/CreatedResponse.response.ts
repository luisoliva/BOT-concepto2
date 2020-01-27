import { IResponse } from '../interfaces/IResponse.interfaces';
import { HeaderMessage } from 'src/models/HeaderMessage';
import { HttpResponse } from '@angular/common/http';

export class CreatedResponse<T>  implements IResponse  {
    constructor(public status: number, public headerMessage: HeaderMessage,public data: T ){
    }
    
}