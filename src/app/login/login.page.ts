import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isNative = Capacitor.isNativePlatform();
  email = '';
  password = '';

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  signIn() {
    this.authService.signInEmailUser(this.email, this.password);
  }
}
