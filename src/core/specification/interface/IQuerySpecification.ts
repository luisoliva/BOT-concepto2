import { ICriteria } from '../criteria/interfaces/ICriteria';
import { IPagination } from './IPagination';

export interface IQuerySpecification{
    Criteria: ICriteria;
    Pagination: IPagination;

    getQueryParams(): string;
}