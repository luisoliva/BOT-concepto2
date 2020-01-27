import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

export class AssignIdRequest {
    id: string;
    active: boolean;
}

@Injectable()
export class ListService {
    private lstMemorie: AssignIdRequest[] = [];
    private lstSelectedSubject: BehaviorSubject<AssignIdRequest[]>;
    private selectItem: BehaviorSubject<AssignIdRequest>;
    lstSelected$: Observable<AssignIdRequest[]>;
    selectItem$: Observable<AssignIdRequest>;
    
    constructor() {
        this.lstSelectedSubject = new BehaviorSubject<AssignIdRequest[]>([]);
        this.selectItem = new BehaviorSubject<AssignIdRequest>(null);

        this.lstSelected$ = this.lstSelectedSubject.asObservable();
        this.selectItem$ = this.selectItem.asObservable();
    }

    ToggleItem(id: string, active: boolean) {

        let item: AssignIdRequest = { id, active };
        console.log(item);
        if (!this.ItemInListMemorie(item)) {
            this.AddListSelected(item);
            this.AddListMemorie(item);
            this.selectItem.next(item);
        } else {
            this.RemoveListMemorie(item);
            this.RemoveListSelected(item);
            this.selectItem.next(null);
        }
    }

    private ItemInListMemorie(item: AssignIdRequest): boolean {
        return this.lstMemorie.map(item => item.id).indexOf(item.id) !== -1;
    }

    private AddListSelected({...item}: AssignIdRequest) {

        let items = [
            ...this.lstSelectedSubject.getValue(),
            item
        ]
        this.lstSelectedSubject.next(items)

    }
    private AddListMemorie(item: AssignIdRequest) {
        item.active = !item.active;

        this.lstMemorie = [
            ...this.lstMemorie,
            item
        ];
    }
    private RemoveListSelected(item: AssignIdRequest) {
        const items = [
            ...this.lstSelectedSubject.getValue().filter(itemAnterior => itemAnterior.id !== item.id),

        ]
        this.lstSelectedSubject.next(items);
    }
    private RemoveListMemorie(item: AssignIdRequest) {
        this.lstMemorie = this.lstMemorie.filter(itemAnterior => itemAnterior.id !== item.id);

    }


}