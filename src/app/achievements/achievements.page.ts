import { ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AchievementService } from '../services/achievement.service';
import { Achievement } from '../types/achievement';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.page.html',
  styleUrls: ['./achievements.page.scss'],
})
export class AchievementsPage implements OnInit {
  achievement: Achievement[] = [];

  constructor(public authService: AuthService, private achievementService: AchievementService, private cd: ChangeDetectorRef) {
    this.achievementService.getAchievements().subscribe(res => {
      this.achievement = res;
      this.cd.detectChanges();
    });
  }

  ngOnInit() {
  }

}
