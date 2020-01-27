import { Observable } from 'rxjs'
import { IQuerySpecification } from 'src/core/specification/interface/IQuerySpecification'
import { InjectionToken } from '@angular/core'
import { OnlineService } from 'src/models/OnlineService';
import { OkResponse } from 'src/core/response/success/OkResponse.response';
import { IResponse } from 'src/core/response/interfaces/IResponse.interfaces';
import { CreatedResponse } from 'src/core/response/success/CreatedResponse.response';


export const BASE_SERVICE = new InjectionToken<IServiceBase<any>>('BASE_SERVICE');
export interface IServiceBase<T> extends ICreaterSevice<T>, IReaderService<T> {

    Update(object: T): Observable<IResponse>;
    // Update<R>(controller: string, entity: Partial<T>): Observable<R>;
    // GetById<R>(controller: string, id: string, action?: string): Observable<R>;
    // Get<R>(controller: string, querySpecification: Readonly<IQuerySpecification>, action?: string ): Observable<R>;
    // Create<R>(controller: string, entity: T): Observable<R>;
    // UpdateStatus<R>(controller: string, entityId: string, action: string): Observable<R>;
}

export interface ICreaterSevice<T> {
    Create<R>(object: T ): Observable<CreatedResponse<T>>;
}

export interface IReaderService<T> {
    Get<R>(object: T): Observable<R>;
}
