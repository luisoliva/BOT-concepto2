import { ICreateReponse } from 'src/models/CreateSuccess';
import { IReaderRepository } from '../repository/Interfaces/Interface Segregation/IReaderRepository.interface';
import { ICreaterRepository } from '../repository/Interfaces/Interface Segregation/ICreaterRepository.interface';
import { IUpdaterRepository } from '../repository/Interfaces/Interface Segregation/IUpdaterRepository.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { NotContentResponse } from 'src/core/response/success/NotContentResponse.response';
import { OkResponse } from 'src/core/response/success/OkResponse.response';
import { IQuerySpecification } from 'src/core/specification/interface/IQuerySpecification';
import { CreatedResponse } from 'src/core/response/success/CreatedResponse.response';
import { IResponse } from 'src/core/response/interfaces/IResponse.interfaces';
import { environment } from '../environments/environment';
import { IServiceBase } from './interfaces/IServiceBase.interface';
import { OnlineService } from 'src/models/OnlineService';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceWebApi implements IServiceBase<OnlineService>{

    private urlModuleSSO = environment.urlBase;
    constructor(
        protected http: HttpClient
    ) { }
        //api/roles/id/Enable {sdd}
    Update(object: OnlineService): Observable<IResponse> {
        let url = `${this.urlModuleSSO}${object.controller}`;
        url += object.idEntity ? `/${object.idEntity}` : '';
        url += object.action ? `/${object.action}` : '';
        //     url += action ? `/${action}` : '';
        return this.http.put<NotContentResponse>(url, object.entity);
    }
    Get<R>(object: OnlineService): Observable<R> {
        let url = `${this.urlModuleSSO}${object.controller}`;
        url += object.idEntity ? `/${object.idEntity}` : '';
        url += object.action ? `/${object.action}` : '';
        url += `${object.query ? object.query.getQueryParams() : ''}`;
        return this.http.get<R>(url);
    }
    Create<R>(object: Partial<OnlineService>): Observable<R> {
        let url = `${this.urlModuleSSO}${object.controller}`;
        return this.http.post<R>(url,object.entity);
    }



    // Update(controller: string, entity: T): Observable<> {
    //     return this.http.put<NotContentResponse>(`${this.urlModuleSSO}${controller}`, entity);
    // }
    // GetById<R>(controller: string, id: string, action: string): Observable<OkResponse<R | T>> {
    //     return this.http.get<OkResponse<T | R>>(`${this.urlModuleSSO}/${controller}/${id}${action ? `/${action}` : ''}`);
    // }
    // Get<R>(controller: string, querySpecification: Readonly<IQuerySpecification>, action?: string): Observable<OkResponse<R[] | T[]>> {
    //     let url = `${this.urlModuleSSO}${controller}`;
    //     url += action ? `/${action}` : '';
    //     url += `${querySpecification ? querySpecification.getQueryParams() : ''}`;
    //     return this.http.get<OkResponse<R[] | T[]>>(url);
    // }
    // Create(controller: string, entity: T): Observable<CreatedResponse<Partial<T>>> {
    //     return this.http.post<CreatedResponse<Partial<T>>>(`${this.urlModuleSSO}${controller}`, entity);
    // }
    // UpdateStatus(controller: string, entityId: string, action: string): Observable<NotContentResponse> {
    //     return this.http.put<NotContentResponse>(`${this.urlModuleSSO}${controller}/${entityId}/${action}`, {})
    // }



}

