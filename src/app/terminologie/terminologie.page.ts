import { Component, OnInit } from '@angular/core';
import data from '../../assets/data/data.json';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-terminologie',
  templateUrl: './terminologie.page.html',
  styleUrls: ['./terminologie.page.scss'],
})
export class TerminologiePage implements OnInit {
  searchTerm: string;

  data = [];

  constructor(public authService: AuthService) {
    const sorted = data.sort((a, b) => {
      if (a.woord < b.woord) {
        return -1;
      }
      if (a.woord > b.woord) {
        return 1;
      }
      return 0;
    });

    let last = null;

    for (let i = 0; i < sorted.length; i++) {
      const term = sorted[i];
      if (!last || last !== term.woord[0]) {
        last = term.woord[0];
        this.data.push({key: last, terms: []});
      }
      this.data[this.data.length - 1].terms.push(term);
    }
  }

  ngOnInit() {
  }
}
