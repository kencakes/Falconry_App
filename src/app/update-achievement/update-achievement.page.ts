import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';
import { Achievement } from '../types/achievement';
import { AchievementService } from '../services/achievement.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-achievement',
  templateUrl: './update-achievement.page.html',
  styleUrls: ['./update-achievement.page.scss'],
})
export class UpdateAchievementPage implements OnInit {
  achievement: Achievement = null;
  updatedBirdName = '';
  updatedDate = '';
  updatedTime = '';
  updatedPrey = '';
  updatedAmount = '';
  updatedComment = '';

  constructor(public authService: AuthService, private achievementService: AchievementService, private route: ActivatedRoute,
              private toastService: ToastService) { }

  ngOnInit() {
    const achievId = this.route.snapshot.paramMap.get('id');
    this.achievementService.getAchievementById(achievId).subscribe(res => {
      this.achievement = res;
    });
  }

  async updateAchiev() {
    await this.achievementService.updateAchievement('achievements', this.achievement.id, this.updatedAmount, this.updatedDate,
      this.updatedTime, this.updatedPrey, this.updatedBirdName, this.updatedComment);
    await this.toastService.confirmationToast('You have successfully updated the selected log!', 'success', 3000);
  }

}
