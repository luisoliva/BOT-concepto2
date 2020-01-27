import { ICriteria } from 'src/core/specification/criteria/interfaces/ICriteria';
import { IPagination } from 'src/core/specification/interface/IPagination';
import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { OkResponse } from 'src/core/response/success/OkResponse.response';
import { CreatedResponse } from 'src/core/response/success/CreatedResponse.response';
import { UserAccount } from 'src/models/UserAccount.interface';
import { Role } from 'src/models/Role';

export const ROLE_SERVICE = new InjectionToken<IRoleService>('ROLE_SERVICE');
export interface IRoleService extends ICreaterSevice<Role>, IReaderService<Role> {


}
export interface ICreaterSevice<T> {
    //Create(object: T ): Observable<any>;
}

export interface IReaderService<T> {
    GetById(idEntity: string):  Observable<OkResponse<T>>;
    GetAll(criteria: ICriteria, page: IPagination): Observable<OkResponse<T[]>> ;

}