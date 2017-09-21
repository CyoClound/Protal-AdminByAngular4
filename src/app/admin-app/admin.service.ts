import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {HttpClient,HttpParams,HttpClientModule} from '@angular/common/http'
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';
import { Observer, Observable } from "rxjs/Rx";
import { ExtensionHttp } from './extension-http';
import { APP_CONFIG, DI_CONFIG } from '../app.config';

@Injectable()
export class AdminService {
    constructor(private http: ExtensionHttp) { }

    login(model): Promise<any> {
        return this.http
            .post('token','client_id='+DI_CONFIG.client_id+'&grant_type=password&UserName='+model.UserName+'&Password='+model.Password+'&client_secret=werqerq')
            .toPromise()
            .then(response => response);
            // .catch(this.handleError);
    }

    getHospitalList(): Promise<any> {
        let p = { hospitalName: ''};
        return this.http
            .get('api/CommDict/GetHospitalDictList', {params:p})
            .toPromise();
            // .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}