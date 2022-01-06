import { Injectable } from '@angular/core';
import { Achievement } from '../types/achievement';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AchievementService {

  constructor(private authService: AuthService) { }

  getAchievements(){

  }

  deleteAchievement(){

  }

  updateAchievement(){

  }

  createAchievements(){

  }
}
