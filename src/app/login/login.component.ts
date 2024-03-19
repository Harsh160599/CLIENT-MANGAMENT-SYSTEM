import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router:Router)
   { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;
      console.log('Username:', username);
      console.log('Password:', password);
      if (username == "harshraj" && password =="w1234578") {
        this.router.navigate(["/index"]);
      } else {
        alert('Login failed. Invalid credentials.');
      }
    } else {
      alert('Form is invalid. Please check your inputs.');
    }
  }
  register()
  {
   this.router.navigate(["/register"]);
  }
}