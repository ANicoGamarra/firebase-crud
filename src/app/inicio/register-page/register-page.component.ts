import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginData } from 'src/app/interfaces/login-data';
import { AuthService } from 'src/app/servicios/autentificacion/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private readonly authService: AuthService,
    private readonly router: Router) { }

    ngOnInit(): void {
      this.form = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
      });
    }
  
    get email() {
      return this.form.get('email');
    }
  
    get password() {
      return this.form.get('password');
    }
  
    onSubmit() {
      this.register(this.form.value);
    }

  register(data: LoginData) {
    this.authService
      .register(data)
      .then(() => this.router.navigate(['/login']))
      .catch((e) => console.log(e.message));
  }

  

}
