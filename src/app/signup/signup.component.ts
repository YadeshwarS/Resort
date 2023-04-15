import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email: string='';
  password: string='';
  username: string='';
  mobile: string='';
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  reg(){
    if(this.username ==''){
      alert('please enter username');
      return;

     }
     if(this.mobile ==''){
      alert('please enter mobile number');
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
    
  
     this.auth.reg(this.email,this.password,this.username);
     this.email='';
     this.password = '';
     this.username= '';
  }
}
