import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  email = '';
  password = '';
  repeatPassword = '';
  errors = '';

  constructor(public authService: AuthService) { }

  createEmailUser(){
    if(this.password === this.repeatPassword){
      this.authService.createEmailUser(this.email, this.password);
    }
    else{
      this.errors = 'ww nie overeen!';
    }
  }

  ngOnInit() {
  }

}
