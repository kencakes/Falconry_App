import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Logbook } from '../types/logbook';
import { LogbookService } from '../services/logbook.service';

@Component({
  selector: 'app-update-logbook',
  templateUrl: './update-logbook.page.html',
  styleUrls: ['./update-logbook.page.scss'],
})
export class UpdateLogbookPage implements OnInit {
  logbook: Logbook = null;
  updatedName = '';
  updatedFood = '';
  updatedAmount = 0;
  updatedDate = '';
  updatedTime = '';
  updatedWeight = 0;

  constructor(public authService: AuthService, private route: ActivatedRoute, private logbookService: LogbookService) {}

  ngOnInit() {
    const logId = this.route.snapshot.paramMap.get('id');
    this.logbookService.getLogbookByID(logId).subscribe(res => {
      this.logbook = res;
    });
  }

  updateLog(){
    this.logbookService.updateLogbook('logbook', this.logbook.id, this.updatedName, this.updatedAmount, this.updatedFood,
      this.updatedDate, this.updatedTime, this.updatedWeight);
  }
}
