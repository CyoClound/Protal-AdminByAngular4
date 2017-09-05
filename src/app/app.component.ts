import { Component } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet><app-pubsub></app-pubsub>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
