import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string="";
  password: string="";

  login() {
    // Replace with actual login logic (e.g., authentication service call)
    console.log(`Logging in with Username: ${this.username}, Password: ${this.password}`);
  }
}
