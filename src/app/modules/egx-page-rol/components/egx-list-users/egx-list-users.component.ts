import { Component, OnInit, Inject, Input, OnDestroy, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ListService, AssignIdRequest } from './ListService.service';
import { UserRoleService } from 'src/services/UserRoleService.service';
import { IPagination } from 'src/core/specification/interface/IPagination';
import { AlertService } from 'src/core/messages/Alert';
import { PageGenericService } from '../../pages/page-generic/PageGeneric.service';


@Component({
  selector: 'app-egx-list-users',
  templateUrl: './egx-list-users.component.html',
  styleUrls: ['./egx-list-users.component.css'],
  providers: [AlertService, ListService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EgxListUsersComponent implements OnInit, OnDestroy {


  @Output() getUsers: EventEmitter<AssignIdRequest[]> = new EventEmitter<AssignIdRequest[]>();
  @Input() roleId: number = null;
  @Output() userSelected: EventEmitter<AssignIdRequest> = new EventEmitter<AssignIdRequest>();
  loading: boolean = false;
  lstUsers: UserRole[] = [];
  lstUsersSelected: AssignIdRequest[] = [];
  paginate: IPagination = {
    page: 1,
    per_page: 6
  };
  ultimateQuery: string;
  constructor(
    private service: UserRoleService,
    private lstService: ListService,
    private cdRef: ChangeDetectorRef
  ) { }


  async ngOnInit() {

    try {
      this.lstService.lstSelected$.subscribe(
        res => {
          this.getUsers.emit(res);
          this.cdRef.markForCheck();
        }
      );

      this.loading = true;
      let res = (await this.service.GetAll(null, null));
      this.paginate = res.paginate,
        this.lstUsers = res.data;
      this.loading = false;
      this.cdRef.markForCheck();
    } catch (e) {
      console.log(e);
    }

  }

  async Search(text: string) {
    this.loading = true;
    this.paginate.page++;
    console.log(this.paginate);
    this.lstUsers = (await this.service.GetAll({ first_name: text }, this.paginate)).data;
    this.loading = false;
    this.cdRef.markForCheck();
  }

  async SeeMore() {
    this.loading = true;
    this.lstUsers = (await this.service.GetAll({ first_name: 'habib' }, {
      page: 2,
      per_page: 6
    })).data;
    this.loading = false;
  }


  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }


  Check(active: boolean, id: string) {
    console.log(id, active);
    this.lstService.ToggleItem(id, active);
  }


}


export class UserRole {
  assignedRole: boolean;
  completeName: string;
  email: string;
  roleId: string;
}
