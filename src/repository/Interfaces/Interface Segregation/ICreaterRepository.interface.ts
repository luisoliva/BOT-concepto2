import { Observable } from 'rxjs';
import { CreatedResponse } from 'src/core/response/success/CreatedResponse.response';


export interface ICreaterRepository<T> {
    Create(entity: T): Observable<CreatedResponse<Partial<T>>>;
}