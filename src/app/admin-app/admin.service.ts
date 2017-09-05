import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';
import { Observer, Observable } from "rxjs/Rx";

import { ExtensionHttp } from './extension-http';

@Injectable()
export class AdminService {
    constructor(private http: ExtensionHttp) { }

    login(model): Promise<void> {
        let p = { loginName: model.UserName, passWord: model.Password, hospitalCode: '01', AppID: 'TeleCareWeb' };

        return this.http
            .post('api/Account/Login', JSON.stringify(p))
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}