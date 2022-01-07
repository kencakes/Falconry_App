import { ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { LogbookService } from '../services/logbook.service';
import { ToastService } from '../services/toast.service';
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

  constructor(private logbookService: LogbookService, private toastService: ToastService, private cd: ChangeDetectorRef,
              public authService: AuthService, public actionSheetController: ActionSheetController, public router: Router) {
    this.logbookService.getLogbook().subscribe(res => {
      this.logbook = res;
      this.cd.detectChanges();
    });
  }

  async presentActionSheet(id: string){
    const actionSheet = await this.actionSheetController.create({
      header: 'Options',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash-outline',
          handler: () => {
            this.logbookService.deleteLogbook('logbook', id);
            this.toastService.confirmationToast('You have successfully deleted a log!', 'success', 3000);
          }
        }, {
          text: 'Update',
          icon: 'build-outline',
          handler: () => {
            this.router.navigate([`/update-logbook/${id}`]);
          }
        }
      ]
    });
    await actionSheet.present();
  }

  ngOnInit() {

  }
}
