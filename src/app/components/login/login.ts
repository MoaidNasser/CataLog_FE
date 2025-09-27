import { Component } from '@angular/core';
import { LoginUserModule } from '../../models/login-user/login-user-module';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user-service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  user : LoginUserModule = {
    email : '',
    password : ''
  };

  constructor(private crud : UserService, private router : Router ) {}

  login() {
    this.crud.login(this.user).subscribe({
  next: () => {
    const role = this.crud.getRole();
    console.log(role);
    if (role === 'USER' && this.crud.isLoggedIn()) {
     
      this.router.navigate(['/cats']);
    } else {
      alert("Login firstly.");
    }
  },
  error: err => {
    alert("Login failed!");
  }
});
  }

}
