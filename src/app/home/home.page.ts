import { Component, ChangeDetectorRef } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { BirdService } from '../services/bird.service';
import { BirdDetailsPage } from '../bird-details/bird-details.page';
import { AuthService } from '../services/auth.service';
import { LocalnotificationService } from '../services/localnotification.service';
import { Bird } from '../types/bird';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  searchTerm: string;
  birds: Bird[] = [];

  constructor(private birdService: BirdService, private cd: ChangeDetectorRef, private alertCtrl: AlertController,
              private modalController: ModalController, public authService: AuthService,
              private localNotificationService: LocalnotificationService) {
    this.birdService.getBirds().subscribe(res => {
      this.birds = res;
      this.cd.detectChanges();
    });

    this.localNotificationService.checkPermission();
    this.localNotificationService.scheduledNotification(1, 'Reminder', 'Do not forget to weight your bird today!');
  }

  async openDetails(bird: Bird) {
    const modal = await this.modalController.create({
      component: BirdDetailsPage,
      componentProps: { id: bird.id },
    });

    return await modal.present();
  }
}
