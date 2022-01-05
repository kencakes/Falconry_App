import { Injectable } from '@angular/core';
import { LocalNotifications} from '@capacitor/local-notifications';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LocalnotificationService {

  constructor(public toastController: ToastController) {  }

  checkPermission() {
    return LocalNotifications.checkPermissions().then((res) => {
      if (res && res.display && res.display === 'denied') {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        LocalNotifications.requestPermissions().then(async (res) => {
          if (res && res.display && res.display === 'denied') {
            const toast = await this.toastController.create({
              message: 'Give permission to send notifications.',
              position: 'bottom',
              duration: 3000,
              buttons: [
                {
                  side: 'end',
                  text: 'Close',
                  handler: () => this.toastController.dismiss()
                }
              ]
            });
            await toast.present();
          }
        });
      }
    });
  }

  async scheduledNotification(id: number, title: string, description: string) {
    await LocalNotifications.schedule({
      notifications: [{
        id,
        title,
        body: description,
        schedule: {
          on: {
            hour: 10,
            minute: 0
          }
        }
      }]
    });
  }


}
