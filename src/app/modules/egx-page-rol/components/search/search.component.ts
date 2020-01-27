import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Observable, BehaviorSubject, Subject, Subscription } from 'rxjs';
import { SearchService } from './serach.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit, OnDestroy{

  @Output() search: EventEmitter<string> = new EventEmitter();
  private searchTerms: Subscription;
  textSearch: string = '';
 
  get isVisibleClose(): boolean {
    return this.textSearch.length > 0;
  }
  ngOnInit() {
    this.searchTerms = this.searchService.searchTerms$.subscribe(res => {
      this.search.emit(res);
    });
  }

  ngOnDestroy(): void {
    this.searchTerms.unsubscribe();
  }

  OnKey(text: string) {
    this.searchService.Search(text.trim());
  }

  Clear(){
    this.textSearch = '';
    this.searchService.Search(this.textSearch);
  }



  constructor(
    private searchService: SearchService
  ) { }
}
