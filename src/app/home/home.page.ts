import { Component, ChangeDetectorRef } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { BirdService, Bird } from '../services/bird.service';
import { BirdDetailsPage } from '../bird-details/bird-details.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  searchTerm: string;
  birds: Bird[] = [];

  constructor(private birdService: BirdService, private cd: ChangeDetectorRef,
              private alertCtrl: AlertController, private modalCtrl: ModalController) {
    this.birdService.getBirds().subscribe(res => {
      this.birds = res;
      this.cd.detectChanges();
    });
  }

  async openDetails(bird: Bird) {
    const modal = await this.modalCtrl.create({
      component: BirdDetailsPage,
      componentProps: { id: bird.id },
    });

    await modal.present();
  }
}
