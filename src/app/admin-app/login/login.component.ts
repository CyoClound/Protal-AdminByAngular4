import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Md5 } from 'ts-md5/dist/md5';

import { AdminService } from '../admin.service';
import { Observable } from 'rxjs/Observable';
import { PubSubService } from 'app/shared/pubsub.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any;
  hospitals: any;
  _pusub: PubSubService;
  result: any;
  router:Router;
  isLoading:boolean=false;
  ngOnInit() {

  }

  constructor(private adminService: AdminService, pubsub: PubSubService, private route: Router) {
    this.model = {};
    this._pusub = pubsub;
    this.router=route;
  }

  onSubmit(model) {
    this.isLoading=true;
    model.Password = Md5.hashStr(model.Password).toString().toUpperCase();
    this.adminService.login(model).then(response => {
      let result = JSON.parse(response._body);
      localStorage.setItem('access_token',result.access_token);
      localStorage.setItem('refresh_token',result.refresh_token);
      this.isLoading=false;
      this.router.navigateByUrl("admin/dashboard");
    }).catch(response=>{
      this.isLoading=false;
    });
  }
}