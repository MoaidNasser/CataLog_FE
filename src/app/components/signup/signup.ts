import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RegisterUserModule } from '../../models/register-user/register-user-module';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user-service';



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
    confirmPassword: ''
  };

  constructor(private crud: UserService) { }


  register(f: NgForm): void {
    this.crud.register(this.user).subscribe();
    console.log(this.user);
  }
}
