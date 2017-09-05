import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule, XHRBackend, RequestOptions } from '@angular/http';

import { AdminAppComponent } from './admin-app.component';
import { LoginComponent } from './login/login.component';
import { FullLayoutComponent } from './layouts/full-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';

import { AdminService } from './admin.service';
import { ExtensionHttp } from './extension-http';
import { PubSubService } from '../shared/pubsub.service';

const AdminAppRouteConfig: Routes = [
  {
    path: 'admin', component: AdminAppComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      {
        path: 'dashboard', component: FullLayoutComponent,
        children: [
          { path: '', loadChildren: './dashboard/dashboard.module#DashboardModule' }
        ]
      },
      {
        path: 'usermanage', component: FullLayoutComponent,
        children: [
          { path: '', loadChildren: './usermanage/usermanage.module#UserManageModule' }
        ]
      }
    ]
  }
];

export function interceptorFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, pubSubService: PubSubService) {
  let service = new ExtensionHttp(xhrBackend, requestOptions, pubSubService);
  return service;
}

@NgModule({
  declarations: [
    AdminAppComponent,
    LoginComponent,
    FullLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    SIDEBAR_TOGGLE_DIRECTIVES
  ],
  imports: [
    FormsModule,
    HttpModule,
    RouterModule.forChild(AdminAppRouteConfig)
  ],
  exports: [
    AdminAppComponent
  ],
  providers: [AdminService, PubSubService, {
    provide: ExtensionHttp,
    useFactory: interceptorFactory,
    deps: [XHRBackend, RequestOptions, PubSubService]
  }],
  bootstrap: [AdminAppComponent]
})
export class AdminAppModule { }
