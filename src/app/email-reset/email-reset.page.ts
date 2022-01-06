import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-reset',
  templateUrl: './email-reset.page.html',
  styleUrls: ['./email-reset.page.scss'],
})
export class EmailResetPage implements OnInit {
  email = '';

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  resetPassword(){
    this.authService.resetEmailPassword(this.email);
    this.router.navigate(['/login']);
  }
}
