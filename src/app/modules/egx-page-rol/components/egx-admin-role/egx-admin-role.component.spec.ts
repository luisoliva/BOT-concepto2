import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgxAdminRoleComponent } from './egx-admin-role.component';

describe('EgxAdminRoleComponent', () => {
  let component: EgxAdminRoleComponent;
  let fixture: ComponentFixture<EgxAdminRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgxAdminRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgxAdminRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
