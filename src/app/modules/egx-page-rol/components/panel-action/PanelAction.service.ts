import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable()
export class PanelActionService {
    private _okFunction: () => void;
    private _discardFunction: () => void;
    constructor() {
    }

    Create(okFunction, discardFunction) {
        this._okFunction = okFunction;
        this._discardFunction = discardFunction;
    }
    Ok() {
        this._okFunction();
    }

    Discard() {
        this._discardFunction();
    }


}