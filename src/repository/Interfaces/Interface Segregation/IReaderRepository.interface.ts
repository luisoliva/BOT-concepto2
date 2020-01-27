import { Observable } from 'rxjs';
import { IQuerySpecification } from 'src/core/specification/interface/IQuerySpecification';
import { OkResponse } from 'src/core/response/success/OkResponse.response';

export interface  IReaderRepository<T> {
    GetByParams(querySpecification: Readonly<IQuerySpecification>): Observable<OkResponse<T[]>>;
    GetById(id: string): Observable<OkResponse<T>>;
}
