import { NgModule } from '@angular/core';
// import { ChartsModule } from 'ng2-charts/ng2-charts';

import { UserManageComponent } from './usermanage.component';
import { UserManageRoutingModule } from './usermanage-routing.module';

@NgModule({
  imports: [
    UserManageRoutingModule,
    // ChartsModule
  ],
  declarations: [ UserManageComponent ]
})
export class UserManageModule { }
