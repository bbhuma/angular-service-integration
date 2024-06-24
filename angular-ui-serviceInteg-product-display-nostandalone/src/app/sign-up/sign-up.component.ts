// src/app/sign-up/sign-up.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor() {}

  onSubmit() {
    // Implement your sign-up logic here
    console.log("Form submitted");
  }
}
