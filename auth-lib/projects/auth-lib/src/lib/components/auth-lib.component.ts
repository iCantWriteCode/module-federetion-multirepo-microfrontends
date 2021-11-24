import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthLibService } from '../services/auth-lib.service'

@Component({
  selector: 'lib-auth-lib',
  templateUrl: './auth-lib.component.html',
  styleUrls: ['./auth-lib.component.css']
})
export class AuthLibComponent implements OnInit {

  loginForm!: FormGroup

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthLibService) { }

  ngOnInit(): void {
    this.createLoginForm()
  }

  createLoginForm(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(): void {
    const formData = this.loginForm.getRawValue()

    this.authService.login(formData.username, formData.password)
    this.router.navigate(['/'])

  }

}
