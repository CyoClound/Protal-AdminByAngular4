import { InjectionToken } from '@angular/core';
import { Message } from 'primeng/primeng';

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export interface AppConfig {
  baseApiUrl: string;
  token: string;
  msgs:Message[];
}

export const DI_CONFIG: AppConfig = {
    baseApiUrl: 'http://localhost:15995/',
    token:'',
    msgs:[]
};