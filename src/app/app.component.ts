import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Essential for router-outlet

@Component({
  selector: 'app-root',
  standalone: true, // Required for Angular 18 features
  imports: [
    CommonModule, 
    RouterModule // Must be imported here so <router-outlet> works in the HTML
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Food List App'; // You can define your application title here
}