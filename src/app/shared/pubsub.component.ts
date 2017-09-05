import { Component } from '@angular/core';
import { PubSubService } from './pubsub.service';
import { Message } from 'primeng/primeng';

@Component({
    selector: 'app-pubsub',
    templateUrl: './pubsub.component.html'
})
export class PubSubComponent {
    showloading = false;
    showToast = false;
    msgs: Message[] = [];
    _pubsub: PubSubService;

    constructor(public pubsub: PubSubService) {
        this._pubsub = pubsub;
    }

    ngOnInit() {
        this._pubsub.errorToast.subscribe(data => {
            this.showToast = true;
            this.msgs.push({ severity: 'error', summary: '错误', detail: data });
        });

        this._pubsub.beforeRequest.subscribe(data => {
            this.showloading = true;
        });
        this._pubsub.afterRequest.subscribe(data => {
            this.showloading = false;
        });
    }
}
