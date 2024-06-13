import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      age: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      department: ['', Validators.required],
      resume: [null, Validators.required],
      bio: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      this.postData();
    }
  }

  postData(): void {
    const formData: Employee = this.employeeForm.value;
    console.log('Form Data:', formData);
    
    // Optionally, if you still want to send data to a server
    /*
    this.http.post<Employee>('http://localhost/api/employees', formData).subscribe(response => {
      console.log('Employee added successfully!', response);
    }, error => {
      console.error('Error adding employee', error);
    });
    */
  }
}
