import { Observable, BehaviorSubject, Subject, ObservedValueOf } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Injectable } from '@angular/core';


@Injectable()
export class SearchService {

    private searchTerms: Subject<string> = new Subject();
    public searchTerms$: Observable<string>
    constructor() {
        this.searchTerms$ = this.searchTerms.pipe(
            debounceTime(500),
            distinctUntilChanged()
        );
    }
    Search(term: string): void {
        this.searchTerms.next(term);
    }
}