import { IQuerySpecification } from './interface/IQuerySpecification';
import { ICriteria } from './criteria/interfaces/ICriteria';
import { IPagination } from './interface/IPagination';

export class QuerySpecification implements IQuerySpecification {

    Criteria: ICriteria;
    Pagination: IPagination;

    constructor(criteria: ICriteria, pagination: IPagination) {
        this.Criteria = criteria;
        this.Pagination = pagination;
    }

    getQueryParams(): string {
        let queryParams = '?';
        if (this.Criteria != null) {
            queryParams += Object.keys(this.Criteria).map((key) => {
                if (this.Criteria[key] != null) {
                    return key + '=' + encodeURIComponent(this.Criteria[key]);
                }
            }).join('&');

            if (this.Pagination != null)
                queryParams += '&';
        }
        if (this.Pagination != null) {

            queryParams += Object.keys(this.Pagination).map((key) => {
                if (this.Pagination[key] != null) {
                    return key + '=' + encodeURIComponent(this.Pagination[key]);
                }
            }).join('&');
        }
        console.log(queryParams);
        return queryParams;
    }
}
