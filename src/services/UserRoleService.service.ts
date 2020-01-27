
import { ICriteria } from 'src/core/specification/criteria/interfaces/ICriteria';
import { IPagination } from 'src/core/specification/interface/IPagination';
import { QuerySpecification } from 'src/core/specification/QuerySpecification';
import { Injectable, Inject } from '@angular/core';
import { pluck, map, mergeMap, mapTo, mergeMapTo } from 'rxjs/operators';
import { Observable, of, merge, BehaviorSubject } from 'rxjs';
import { Role } from 'src/models/Role';
import { OkResponse } from 'src/core/response/success/OkResponse.response';
import { REPO_ROLE, IRoleRepository } from 'src/repository/Interfaces/IRoleRepository.interface';
import { IRoleService } from './interfaces/IRoleService.interface';
import { CreatedResponse } from 'src/core/response/success/CreatedResponse.response';
import { BASE_SERVICE, IServiceBase } from './interfaces/IServiceBase.interface';
import { IResponse } from 'src/core/response/interfaces/IResponse.interfaces';
import { OnlineService } from 'src/models/OnlineService';
import { UserAccount } from 'src/models/UserAccount.interface';
import { UserRole } from 'src/app/modules/egx-page-rol/components/egx-list-users/egx-list-users.component';

@Injectable({
    providedIn: 'root'
})
export class UserRoleService {

    constructor(
        @Inject(BASE_SERVICE) private repo: IServiceBase<OnlineService>
    ) { }

    private lstUsers = new BehaviorSubject<UserRole[]>([]);
    public lstUsers$: Observable<UserRole[]>;

    GetListUsers(){
        return this.lstUsers.asObservable();
    }
    GetById(idEntity: string): Observable<OkResponse<Role>> {
        return this.repo.Get({ controller: 'users', idEntity });
    }
    async GetAll(criteria: ICriteria, page: IPagination): Promise<Partial<OkResponse<UserRole[]>>> {
        let r = await this.repo.Get<OkResponse<Role[]>>({ controller: 'users', query: new QuerySpecification(criteria, {page:1, per_page:3}) }).toPromise();
        let r2 = await this.repo.Get<OkResponse<Role[]>>({ controller: 'users', query: new QuerySpecification(criteria, page) }).toPromise();
        let c1 = this.Convert(r.data, false);
        let c2 = this.Convert(r.data, true);
        let res: Partial<OkResponse<UserRole[]>> = {
            data: this.MixList(c1, c2),
            paginate: r2.paginate,
        }
        return res;
    }

    MixList(lst1: UserRole[], ls2: UserRole[]) {
        let lstSobrantes = [];
        let lstAssings = ls2.map(
            (res, i) => {
                if (!lst1[i]) {
                    return res;
                }
                if (lst1[i].roleId === res.roleId && lst1[i].assignedRole !== res.assignedRole) {
                    return lst1[i];
                } else {
                    if (lst1[i]) {
                        lstSobrantes = [...lstSobrantes, lst1[i]]
                    } else {
                        return res;
                    }
                }
            }
        );
     
        return [...lstSobrantes, ...lstAssings]
    }
    Convert(lst: Role[], isAssigned: boolean): UserRole[] {
        return lst.map((res,i) => {
            return {
                completeName: res.first_name + ' rejón',
                assignedRole: isAssigned,
                email: res.email,
                roleId: res.id
            };
        }
        );
    }


}

