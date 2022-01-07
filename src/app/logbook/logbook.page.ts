import { ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { LogbookService } from '../services/logbook.service';
import { Logbook } from '../types/logbook';
import { AuthService } from '../services/auth.service';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';

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

  constructor(private logbookService: LogbookService, private cd: ChangeDetectorRef, public authService: AuthService,
              public actionSheetController: ActionSheetController, public router: Router) {
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

  async presentActionSheet(id: string){
    const actionSheet = await this.actionSheetController.create({
      header: 'Options',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.logbookService.deleteLogbook('logbook', id);
          }
        }, {
          text: 'Update',
          icon: 'trash',
          handler: () => {
            this.router.navigate([`/update-logbook/${id}`]);
          }
        }
      ]
    });
    await actionSheet.present();
  }
}
