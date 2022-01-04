import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Logbook } from '../types/logbook';

@Component({
  selector: 'app-create-logbook',
  templateUrl: './create-logbook.page.html',
  styleUrls: ['./create-logbook.page.scss'],
})
export class CreateLogbookPage implements OnInit {

  logbook: Logbook[] = [];
  newName = '';
  newLatin = '';
  newFood = '';
  newAmount = 0;
  newDate = '';
  newTime = '';
  newWeight = 0;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
