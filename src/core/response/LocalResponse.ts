import { HeaderMessage } from 'src/models/HeaderMessage';

export class LocalResponse {
    constructor(public headerMessage: HeaderMessage, data: any ){
    }
}