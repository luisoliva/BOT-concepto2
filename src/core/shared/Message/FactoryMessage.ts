import { IFactoryAbstract } from './IFactoryAbstract';
import { ErrorMessage } from './ErrorMessage.factory';
import { SuccessMessage } from './SuccessMessage.factory';


export class FactoriryMessage{

    public static getFactory(type: string) : IFactoryAbstract{
        console.log(type)
        if(type==="error"){
            return new ErrorMessage();
        }else if(type==="success"){ 
            return new SuccessMessage();
        }
    }
}