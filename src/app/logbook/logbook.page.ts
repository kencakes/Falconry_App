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
  newFood = '';
  newAmount = 0;
  newDate = '';
  newTime = '';
  newWeight = 0;

  constructor(private logbookService: LogbookService, private cd: ChangeDetectorRef, public authService: AuthService) {
    this.logbookService.getLogbook().subscribe(res => {
      this.logbook = res;
      this.cd.detectChanges();
    });
  }

  ngOnInit() {

  }

  async createLogbook(): Promise<void>{
    await this.logbookService.creatLogbook(this.newName, this.newFood, this.newAmount, this.newDate, this.newTime, this.newWeight);
  }

  deleteLog(id: string){
    this.logbookService.deleteLogbook('logbook', id);
  }
}
