import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AchievementService } from '../services/achievement.service';
import { Achievement } from '../types/achievement';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-create-achievement',
  templateUrl: './create-achievement.page.html',
  styleUrls: ['./create-achievement.page.scss'],
})
export class CreateAchievementPage implements OnInit {
  achievement: Achievement[] = [];
  newBirdName = '';
  newAmount = 0;
  newComment = '';
  newPrey = '';
  newDate = '';
  newTime = '';

  constructor(public authService: AuthService, public achievementService: AchievementService, private toastService: ToastService) { }

  ngOnInit() {
  }

  async createAchievement(): Promise<void>{
    await this.achievementService.createAchievement(this.newAmount, this.newDate, this.newTime, this.newPrey, this.newBirdName,
      this.newComment);
    await this.toastService.confirmationToast('You have successfully added an achievement!', 'success', 3000);
  }
}
