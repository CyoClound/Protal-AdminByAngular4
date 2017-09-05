import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PubSubService {
    beforeRequest: Subject<string>;
    afterRequest: Subject<string>;
    errorToast: Subject<string>;
    successToast: Subject<string>;
    constructor() {
        this.beforeRequest = new Subject<string>();
        this.afterRequest = new Subject<string>();
        this.errorToast = new Subject<string>();
        this.successToast = new Subject<string>();
    }
}
