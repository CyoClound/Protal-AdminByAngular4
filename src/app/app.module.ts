import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminAppComponent } from './admin-app/admin-app.component';
import { HomeAppComponent } from './home-app/home-app.component';
// import { BreadcrumbsComponent } from './admin-app/shared/breadcrumb.component';

import { HomeAppModule } from './home-app/home-app.module';
import { AdminAppModule } from './admin-app/admin-app.module';
import { GrowlModule } from 'primeng/primeng';
import { APP_CONFIG, DI_CONFIG } from './app.config';

import { Http, HttpModule, XHRBackend, RequestOptions } from '@angular/http';
import { ExtensionHttp } from './admin-app/extension-http';
import { AdminService } from './admin-app/admin.service';
import { PubSubService } from './shared/pubsub.service';
import { PubSubComponent } from './shared/pubsub.component';

const AppRouteConfig: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: 'admin', loadChildren: './admin-app/admin-app.module#AdminAppModule' },
  { path: 'home', component: HomeAppComponent }
];

export function interceptorFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, pubSubService: PubSubService) {
  let service = new ExtensionHttp(xhrBackend, requestOptions, pubSubService);
  return service;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeAppComponent,
    PubSubComponent
    // BreadcrumbsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HomeAppModule,
    AdminAppModule,
    GrowlModule,
    HttpModule,
    RouterModule.forRoot(
      AppRouteConfig,
      // { enableTracing: true }
    ),
  ],
  providers: [AdminService,
    { provide: APP_CONFIG, useValue: DI_CONFIG }, 
    {
      provide: ExtensionHttp,
      useFactory: interceptorFactory,
      deps: [XHRBackend, RequestOptions, PubSubService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
