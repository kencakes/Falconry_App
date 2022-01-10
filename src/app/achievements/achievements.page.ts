import { ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AchievementService } from '../services/achievement.service';
import { ToastService } from '../services/toast.service';
import { Achievement } from '../types/achievement';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.page.html',
  styleUrls: ['./achievements.page.scss'],
})
export class AchievementsPage implements OnInit {

  achievement: Achievement[] = [];

  constructor(public authService: AuthService, private achievementService: AchievementService, private cd: ChangeDetectorRef,
              public router: Router, private toastService: ToastService, public actionSheetController: ActionSheetController) {
    this.achievementService.getAchievements().subscribe(res => {
      this.achievement = res;
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
            this.achievementService.deleteAchievement('achievements', id);
            this.toastService.confirmationToast('You have successfully deleted an achievement!', 'success', 3000);
          }
        }, {
          text: 'Update',
          icon: 'build-outline',
          handler: () => {
            this.router.navigate([`/update-achievement/${id}`]);
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
    });
    await actionSheet.present();
  }

  ngOnInit() {
  }

}
