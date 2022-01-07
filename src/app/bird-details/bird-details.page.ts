import { Component, Input, OnInit } from '@angular/core';
import { BirdService } from '../services/bird.service';
import { ModalController } from '@ionic/angular';
import { Bird } from '../types/bird';

@Component({
  selector: 'app-bird-details',
  templateUrl: './bird-details.page.html',
  styleUrls: ['./bird-details.page.scss'],
})
export class BirdDetailsPage implements OnInit {
  @Input() id: string;
  bird: Bird = null;

  constructor(private birdService: BirdService, public modalController: ModalController) { }

  ngOnInit() {
    this.birdService.getBirdById(this.id).subscribe(res => {
      this.bird = res;
    });
  }
}
