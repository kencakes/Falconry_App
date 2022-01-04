import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-legislation',
  templateUrl: './legislation.page.html',
  styleUrls: ['./legislation.page.scss'],
})
export class LegislationPage implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
