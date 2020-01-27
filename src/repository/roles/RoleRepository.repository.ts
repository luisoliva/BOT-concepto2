
import { Observable } from 'rxjs';
import { IQuerySpecification } from 'src/core/specification/interface/IQuerySpecification';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role } from 'src/models/Role';
import { OkResponse } from 'src/core/response/success/OkResponse.response';
import { UserAccount } from 'src/models/UserAccount.interface';
import { IRoleRepository } from '../Interfaces/IRoleRepository.interface';
@Injectable()
export class RoleRepository{}
// export class RoleRepository extends SSORepository<Role> implements IRoleRepository<Role>{

//     private URI = `${environment.users}`;

//     constructor(
//         public http: HttpClient
//     ) { super('users', http); }
//     getByEmail(): Observable<OkResponse<Role>> {
//         throw new Error("Method not implemented.");
//     }

// }
