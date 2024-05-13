import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginService } from '../shared/services/login/login.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isvalidUser: boolean = true;
  constructor(private loginService: LoginService, private router: Router) {}
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      mail: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if(this.loginForm.valid){
    this.loginService.getUser().subscribe({
      next: (users: any) => {
        console.log(users);
        let filteredUsers = users.some((user: any) => {
          return (
            user.mail === this.loginForm.value.mail &&
            user.password === this.loginForm.value.password
          );
        });
        console.log('filteredUsers', filteredUsers);
        if (filteredUsers) {
          localStorage.setItem('currentUser', this.loginForm.value.mail);
          this.isvalidUser = true;
          this.router.navigate(['home']);
        } else {
          this.isvalidUser = false;
        }
      },
      error: (err) => console.log(err),
      complete: () => console.log('getUser completed'),
    });
  }
  }
  onRegister() {
    this.router.navigate(['register']);
  }
}
