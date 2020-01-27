import { Component, OnInit, OnDestroy, TemplateRef, ChangeDetectionStrategy, ChangeDetectorRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AlertService } from 'src/core/messages/Alert';
import { HeaderMessage } from 'src/models/HeaderMessage';
import { Subscription } from 'rxjs';
import { PageGenericService } from './PageGeneric.service';

@Component({
  selector: 'app-page-generic',
  templateUrl: './page-generic.component.html',
  styleUrls: ['./page-generic.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageGenericComponent implements OnInit, OnDestroy , OnChanges{
  @Input() enable: boolean;
  _contentMessage: HeaderMessage = null;
  _pageSuscribe: Subscription;
  @Input() title: string;
  constructor(
    private page: PageGenericService,
    private cdRef:  ChangeDetectorRef
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('he sido cambiado')

  }



  ngOnInit() {
    this._pageSuscribe = this.page.GetAlert().subscribe(
      res => {
        this._contentMessage = res;
        this.cdRef.markForCheck();
      }
    );
  }

  ngOnDestroy(): void {
    this._pageSuscribe.unsubscribe();
  }
}
