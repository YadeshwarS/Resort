import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    email: string = '';
    password: string = '';
    username: string='';
    loggedin: boolean= false;

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }
   login() {
    if(this.username == ''){
      alert('please enter username');
      return;
    }
    if(this.email == ''){
    alert('please enter email');
    return;
   }

   if(this.password == '') {
    alert('please enter password');
    return;
   }

   this.auth.login(this.email,this.password);
   this.email='';
   this.password = '';
   this.username='';
}
}
