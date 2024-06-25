// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './product-list/product.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UserService } from './sign-up/sign-up.service';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        AddEmployeeComponent,
        EmployeesComponent,
        LoginComponent,
        SignUpComponent,
        AddproductComponent,
        AboutComponent,
        ContactUsComponent,
        NavBarComponent,
        ResetPasswordComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    providers: [ProductService,UserService],
    bootstrap: [AppComponent]
})
export class AppModule { }
