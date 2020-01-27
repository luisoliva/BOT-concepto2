import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgxTableComponent } from './egx-table.component';

describe('EgxTableComponent', () => {
  let component: EgxTableComponent;
  let fixture: ComponentFixture<EgxTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgxTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgxTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
