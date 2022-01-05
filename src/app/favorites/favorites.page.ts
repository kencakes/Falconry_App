import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BirdService} from '../services/bird.service';
import {Bird} from '../types/bird.interface';
import {AuthService} from '../services/auth.service';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  bird: Bird = null;
  favoritedBirds = [];

  constructor(private router: ActivatedRoute, private birdService: BirdService, public authService: AuthService,
              private storage: Storage)
  {
    const id = this.router.snapshot.paramMap.get('id');

    this.birdService.getBirdById(id).subscribe(res => {
      this.bird = res;
      this.favoritedBirds.push(this.bird);

      // saves to local storage
      const birdsJson = JSON.stringify(this.favoritedBirds);
      localStorage.setItem('birdsStorage', birdsJson);
      console.log('birds: ', this.favoritedBirds);

    });

    this.getLocalStorage();
  }

  ngOnInit() {
  }

  getLocalStorage(){
    // get the saved items in the localstorge
    const test = localStorage.getItem('birdsStorage');
    this.favoritedBirds = JSON.parse(test);
    console.log('test parse: ', test);
  }
}
