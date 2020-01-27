import { ICriteria } from './interfaces/ICriteria';

export class UserCriteria implements ICriteria {
    name: string;
    last_name: string;
    email: string;

    constructor(name: string, last_name: string, email: string) {
        this.name = name;
        this.last_name = last_name;
        this.email = email;
    }
}