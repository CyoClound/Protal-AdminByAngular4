import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserManageComponent } from './usermanage.component';

const routes: Routes = [
  {
    path: '',
    component: UserManageComponent,
    data: {
      title: '用户管理'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManageRoutingModule { }
