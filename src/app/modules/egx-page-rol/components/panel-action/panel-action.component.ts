import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';
import { PageGenericService } from '../../pages/page-generic/PageGeneric.service';
import { PanelActionService } from './PanelAction.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-panel-action',
  templateUrl: './panel-action.component.html',
  styleUrls: ['./panel-action.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelActionComponent implements OnInit, OnDestroy {
  @Input()  enable = true;
  constructor(
    private panel: PanelActionService,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit() {

  }

  ngOnDestroy(): void {
  }
  Ok() {
    console.log('Hola soy el ok desde el componente panel');
    this.panel.Ok();
  }
  Discard() {
    console.log('Hola soy el discard desde el componente panel');
    this.panel.Discard();
  }



}
