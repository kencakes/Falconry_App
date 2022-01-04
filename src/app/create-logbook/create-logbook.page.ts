import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Logbook } from '../types/logbook';
import { LogbookService } from '../services/logbook.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-create-logbook',
  templateUrl: './create-logbook.page.html',
  styleUrls: ['./create-logbook.page.scss'],
})
export class CreateLogbookPage implements OnInit {

  logbook: Logbook[] = [];
  newName = '';
  newFood = '';
  newAmount = 0;
  newDate = '';
  newTime = '';
  newWeight = 0;

  constructor(public authService: AuthService, private logbookService: LogbookService, public toastCtrl: ToastController) { }

  ngOnInit() {
  }

  async confirmationToast() {
    const toast = await this.toastCtrl.create({
      message: 'You have successfully added a log!',
      duration: 3000,
      color: 'success'
    });
    await toast.present();
  }

  async createLogbook(): Promise<void>{
    await this.logbookService.creatLogbook(this.newName, this.newFood, this.newAmount, this.newDate, this.newTime, this.newWeight);
    await this.confirmationToast();
  }

}
