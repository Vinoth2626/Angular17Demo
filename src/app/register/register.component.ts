import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginService } from '../shared/services/login/login.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(
    public fb: FormBuilder,
    public loginService: LoginService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      mail: ['', [Validators.required]],
      password: ['', [Validators.required]],
      mobilenumber: [''],
    });
  }
  get fregister() {
    return this.registerForm.controls;
  }
  onRegister() {
    if (this.registerForm.valid) {
      this.loginService.registerUser(this.registerForm.value).subscribe({
        next: (data) => {
          this.router.navigateByUrl('login');
          console.log(data);
        },
        error: (err) => console.log(err),
        complete: () => console.log('completed'),
      });
    }
  }
}
