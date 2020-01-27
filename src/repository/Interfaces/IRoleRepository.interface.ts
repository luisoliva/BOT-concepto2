
import { InjectionToken } from '@angular/core';
import { IReaderRepository } from './Interface Segregation/IReaderRepository.interface';
import { ICreateReponse } from 'src/models/CreateSuccess';
import { ICreaterRepository } from './Interface Segregation/ICreaterRepository.interface';
import { IUpdaterRepository } from './Interface Segregation/IUpdaterRepository.interface';
import { UserAccount } from 'src/models/UserAccount.interface';
import { Role } from 'src/models/Role';
import { Observable } from 'rxjs';
import { OkResponse } from 'src/core/response/success/OkResponse.response';

export const REPO_ROLE = new InjectionToken<IRoleRepository<any>>('REPO_ROLE');
export interface IRoleRepository<T> extends IReaderRepository<Role>, ICreaterRepository<Role> {
    getByEmail(): Observable<OkResponse<T>>;
}
