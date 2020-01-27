
import { ICriteria } from 'src/core/specification/criteria/interfaces/ICriteria';
import { IPagination } from 'src/core/specification/interface/IPagination';
import { QuerySpecification } from 'src/core/specification/QuerySpecification';
import { Injectable, Inject } from '@angular/core';
import { pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Role } from 'src/models/Role';
import { OkResponse } from 'src/core/response/success/OkResponse.response';
import { REPO_ROLE, IRoleRepository } from 'src/repository/Interfaces/IRoleRepository.interface';
import { IRoleService } from './interfaces/IRoleService.interface';
import { CreatedResponse } from 'src/core/response/success/CreatedResponse.response';
import { BASE_SERVICE, IServiceBase } from './interfaces/IServiceBase.interface';
import { IResponse } from 'src/core/response/interfaces/IResponse.interfaces';
import { OnlineService } from 'src/models/OnlineService';
import { UserAccount } from 'src/models/UserAccount.interface';

@Injectable()
export class RoleService implements IRoleService {

    constructor(
        @Inject(BASE_SERVICE) private repo: IServiceBase<OnlineService>
    ){}
    GetById(idEntity: string): Observable<OkResponse<Role>> {
        return this.repo.Get({controller: 'users', idEntity});
    }
    GetAll(criteria: ICriteria, page: IPagination): Observable<OkResponse<Role[]>> {
        return this.repo.Get<OkResponse<Role[]>>({controller: 'users', query: new QuerySpecification(criteria, page)});
    }
    CanCreate(): Observable<UserAccount> {
        return this.repo.Get<UserAccount>({controller: 'users', action: 'canCreate'});
    }


}

