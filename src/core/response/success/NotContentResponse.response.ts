import { HeaderMessage } from 'src/models/HeaderMessage';
import { IResponse } from '../interfaces/IResponse.interfaces';

export class NotContentResponse implements IResponse{
    constructor(public status: number, public headerMessage: HeaderMessage){

    }
}