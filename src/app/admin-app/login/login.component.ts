import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import {Message} from 'primeng/primeng';

import {AdminService} from '../admin.service';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css']
})
export class LoginComponent {

  model:any;

  result:any;

  constructor(private adminService:AdminService,private route: Router) {
    this.model={};
  }



  onSubmit(model){
    this.model.rememberMe=true;
    this.model.DeptCode="";
    this.model.ClientType= '4';
    this.adminService.login(model);
  }
}