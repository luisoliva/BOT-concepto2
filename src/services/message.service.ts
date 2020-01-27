import { NzModalService } from 'ng-zorro-antd';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class messageService{
    constructor(private modalService: NzModalService){}

    message(){
        this.modalService.success({
            nzTitle: 'This is a success message',
            nzContent: 'some messages...some messages...'
          });
    }
}