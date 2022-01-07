import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Logbook } from '../types/logbook';
import { LogbookService } from '../services/logbook.service';
import { ToastController } from '@ionic/angular';
import { ToastService } from '../services/toast.service';

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

  constructor(public authService: AuthService, private route: ActivatedRoute, private logbookService: LogbookService,
              public toastCtrl: ToastController, private toastService: ToastService) {}

  ngOnInit() {
    const logId = this.route.snapshot.paramMap.get('id');
    this.logbookService.getLogbookByID(logId).subscribe(res => {
      this.logbook = res;
    });
  }

  async updateLog() {
    await this.logbookService.updateLogbook('logbook', this.logbook.id, this.updatedName, this.updatedAmount, this.updatedFood,
      this.updatedDate, this.updatedTime, this.updatedWeight);
    await this.toastService.confirmationToast('You have successfully updated the selected log!', 'success', 3000);
  }
}
