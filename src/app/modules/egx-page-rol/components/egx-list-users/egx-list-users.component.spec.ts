import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgxListUsersComponent } from './egx-list-users.component';

describe('EgxListUsersComponent', () => {
  let component: EgxListUsersComponent;
  let fixture: ComponentFixture<EgxListUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgxListUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgxListUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
