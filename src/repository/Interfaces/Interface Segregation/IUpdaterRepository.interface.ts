import { Observable } from 'rxjs';
import { NotContentResponse } from 'src/core/response/success/NotContentResponse.response';

export interface IUpdaterRepository<T>{
    Update(entity: T): Observable<NotContentResponse>;
}
