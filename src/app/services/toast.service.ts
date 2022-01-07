import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastCtrl: ToastController) { }

  async confirmationToast(message: string, color: string, duration: number){
    const toast = await this.toastCtrl.create({
      message,
      duration,
      color
    });
    await toast.present();
  }
}
