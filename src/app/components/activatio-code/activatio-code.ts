import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activatio-code',
  imports: [FormsModule, CommonModule],
  templateUrl: './activatio-code.html',
  styleUrl: './activatio-code.css'
})
export class ActivatioCode {

  constructor(private userService : UserService, private router : Router){}

  code: string = '';

  get codeValid(): boolean {
    return /^[0-9]{6}$/.test(this.code);
  }

  onSubmit() {
    if (!this.codeValid) {
      return;
    }
   
    this.userService.verify(sessionStorage.getItem('email'),this.code).subscribe({
      next : (response) => { if(response.match("Invalid"))
        alert("Invalid code.");
        else if (response.match("Invalid")) 
          alert("expierd");
        else {
          alert("Acticated sucssesfuly.");
          this.router.navigate(["/login"]);
        }
      
    }});

  }

  resendCode() {
    this.userService.verify(sessionStorage.getItem('email'),this.code).subscribe();
    alert('تم إرسال كود جديد ');
  }
}
