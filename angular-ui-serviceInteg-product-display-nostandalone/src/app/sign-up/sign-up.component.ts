// src/app/sign-up/sign-up.component.ts

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from './sign-up.service';
import { User } from '../models/signup-user.model';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  
  constructor(private userService: UserService) { }

  onSubmit(signUpForm: NgForm) {
    if (signUpForm.valid) {
      const user: User = signUpForm.value;
      this.userService.signUp(user).subscribe(
        response => {
          console.log('User signed up successfully', response);
          // Optionally reset the form or navigate to another page
        },
        error => {
          console.error('There was an error during sign up', error);
        }
      );
    }
  }
}

