import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RegisterUserModule } from '../../models/register-user/register-user-module';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user-service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signup',
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {

  user: RegisterUserModule = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role : 'USER'
  };

  constructor(private crud: UserService, private router: Router) { }


  register(f: NgForm): void {
    this.crud.register(this.user).subscribe();
    sessionStorage.setItem('email', this.user.email.toString());
    this.router.navigate(['/verify']);
    console.log(this.user);
  }
}
