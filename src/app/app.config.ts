import { InjectionToken } from '@angular/core';
import { Message } from 'primeng/primeng';

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export interface AppConfig {
  baseApiUrl: string;
  token: string;
  client_id:string;
  msgs:Message[];
}

export const DI_CONFIG: AppConfig = {
    baseApiUrl: 'http://192.168.1.202:8085/',
    client_id:'2016042810007',
    token:'',
    msgs:[]
};