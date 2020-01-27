// httpSetHeaders.interceptor.ts
import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';
 
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { CreatedResponse } from '../response/success/CreatedResponse.response';
import { OkResponse } from '../response/success/OkResponse.response';
import { HeaderMessage } from 'src/models/HeaderMessage';
import { NotContentResponse } from '../response/success/NotContentResponse.response';
import { UserAccount } from 'src/models/UserAccount.interface';
import { Role } from 'src/models/Role';
 
@Injectable()
export class httpSetHeaders implements HttpInterceptor {
    
    constructor(
        ) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
 
 
        // if (!request.headers.has('Content-Type')) {
        //     request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        // }
 
        // request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
 
        // request = request.clone({ headers: request.headers.set('Freaky', 'Jolly') });
 
        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    let newBody;
                    let headerMessage: HeaderMessage = { 
                        message: `Soy un mensaje del status ${event.status}`,
                        type: 'Success'
                    }
                    if(event.status == 200){
                        newBody = new OkResponse<any>(event.status,headerMessage, event.body["data"], event.body['page']);
                    }
                    if(event.status == 201){
                        newBody = new CreatedResponse<any>(event.status,headerMessage, event.body);
                    }
                    if(event.status == 204){
                        newBody = new NotContentResponse(event.status,headerMessage);
                    }
                    console.log(newBody)
                    return event.clone({
                        body: newBody
                    });
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
            
                let data = {};
                data = {
                    status: error.status,
                    // domain: error.domain,
                    message: error.message,
                    // reason: error.reason
                };
                console.log(error);
                return throwError(error);
            }));
    }
}