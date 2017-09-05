import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeAppComponent } from './home-app.component';
import { FullLayoutComponent } from './layouts/full-layout.component';
import { CentralDynaComponent } from './central-dyna/central-dyna.component';
import { ExpertIntroComponent } from './expert-intro/expert-intro.component';

const HomeAppRouteConfig: Routes = [
  {
    path: 'home', component: HomeAppComponent,
    children: [
      // { path: '', redirectTo: 'layout', pathMatch: 'full' },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { 
        path: 'expert', component: FullLayoutComponent,
        children:[
          {path:'',component:ExpertIntroComponent}
        ]
      },
      { 
        path: 'central', component: FullLayoutComponent,
        children:[
          {path:'',component:CentralDynaComponent}
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [
    FullLayoutComponent,
    CentralDynaComponent,
    ExpertIntroComponent
  ],
  imports: [
    RouterModule.forChild(HomeAppRouteConfig)
  ],
  providers: [],
  bootstrap: []
})
export class HomeAppModule { }
