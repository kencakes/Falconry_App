import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'terminologie',
    loadChildren: () => import('./terminologie/terminologie.module').then( m => m.TerminologiePageModule)
  },
  {
    path: 'bird-details',
    loadChildren: () => import('./bird-details/bird-details.module').then( m => m.BirdDetailsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'logbook',
    loadChildren: () => import('./logbook/logbook.module').then( m => m.LogbookPageModule)
  },
  {
    path: 'create-logbook',
    loadChildren: () => import('./create-logbook/create-logbook.module').then( m => m.CreateLogbookPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'email-reset',
    loadChildren: () => import('./email-reset/email-reset.module').then( m => m.EmailResetPageModule)
  },
  {
    path: 'achievements',
    loadChildren: () => import('./achievements/achievements.module').then( m => m.AchievementsPageModule)
  },
  {
    path: 'update-logbook/:id',
    loadChildren: () => import('./update-logbook/update-logbook.module').then( m => m.UpdateLogbookPageModule)
  },
  {
    path: 'create-achievement',
    loadChildren: () => import('./create-achievement/create-achievement.module').then( m => m.CreateAchievementPageModule)
  },
  {
    path: 'update-achievement/:id',
    loadChildren: () => import('./update-achievement/update-achievement.module').then( m => m.UpdateAchievementPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
