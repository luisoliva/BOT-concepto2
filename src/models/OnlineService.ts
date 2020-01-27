import { IQuerySpecification } from 'src/core/specification/interface/IQuerySpecification';

export class OnlineService {

    // api/users/idEntity
    // api/users/id/action
    // api/users/action
    // api/users?quer
    constructor(
        public controller: string,
        public idEntity?: string,
        public entity?: any,
        public action?: string,
        public query?: IQuerySpecification
        ){}

}