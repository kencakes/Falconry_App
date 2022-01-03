import { ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { LogbookService } from '../services/logbook.service';
import { Logbook } from '../types/logbook';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-logbook',
  templateUrl: './logbook.page.html',
  styleUrls: ['./logbook.page.scss'],
})
export class LogbookPage implements OnInit {

  logbook: Logbook[] = [];
  newName = '';
  newLatin = '';
  newDate = '';
  newFood = '';
  newAmount = '';

  constructor(private logbookService: LogbookService, private cd: ChangeDetectorRef, public authService: AuthService) {
    this.logbookService.getLogbook().subscribe(res => {
      this.logbook = res;
      this.cd.detectChanges();
    });
  }

  ngOnInit() {
  }

  async createLogbook(): Promise<void>{
    await this.logbookService.creatLogbook(this.newName, this.newDate, this.newLatin, this.newFood, this.newAmount);
  }
}
