import { Component, Input, OnInit } from '@angular/core';
import { BirdService } from '../services/bird.service';
import { ModalController} from '@ionic/angular';
import { Bird } from '../types/bird.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bird-details',
  templateUrl: './bird-details.page.html',
  styleUrls: ['./bird-details.page.scss'],
})
export class BirdDetailsPage implements OnInit {
  @Input() id: string;
  bird: Bird = null;
  public favoriteList: any[] = [];

  constructor(private birdService: BirdService, public modalController: ModalController, private router: Router) { }

  ngOnInit() {
    this.birdService.getBirdById(this.id).subscribe(res => {
      this.bird = res;
    });
  }

  addToFavorite(){
    this.favoriteList.push(this.bird);
    console.log(this.favoriteList);
    this.router.navigate(['/favorites', {id: this.bird.id}]);
    // this.router.navigate(['/favorites'], {});
  }
}
