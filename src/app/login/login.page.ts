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

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
