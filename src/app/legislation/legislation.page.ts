import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';

@Component({
  selector: 'app-legislation',
  templateUrl: './legislation.page.html',
  styleUrls: ['./legislation.page.scss'],
})
export class LegislationPage implements OnInit {

  pdfUrl = 'https://file-examples-com.github.io/uploads/2017/10/file-sample_150kB.pdf';
  private downloadedFile;

  constructor(public authService: AuthService, private http: HTTP ) {
  }

  downloadDierenwelzijnn(){
    // eslint-disable-next-line max-len
    const url = 'https://firebasestorage.googleapis.com/v0/b/falconryshop-1c19e.appspot.com/o/15.06.2018%20BvR%20betreffende%20het%20welzijn%20van%20in%20gevangenschap%20gehouden%20roofvogels.pdf?alt=media&token=b3cb5b06-e623-4749-8489-9b4a076bed68';
    this.http.sendRequest(url, { method: 'get', responseType: 'arraybuffer' }).then(
      httpResponse => {
        console.log('File dowloaded successfully');
        this.downloadedFile = new Blob([httpResponse.data], { type: 'application/pdf' });
      }
    ).catch(err => {
      console.error(err);
    });
  }

  downloadDierenwelzijn() {
    // eslint-disable-next-line max-len
    const url = 'https://firebasestorage.googleapis.com/v0/b/falconryshop-1c19e.appspot.com/o/15.06.2018%20BvR%20betreffende%20het%20welzijn%20van%20in%20gevangenschap%20gehouden%20roofvogels.pdf?alt=media&token=b3cb5b06-e623-4749-8489-9b4a076bed68';
    this.http.sendRequest(url,
      {
        method: 'post',
        data: { id: 12, message: 'test' },
        timeout: 5000
      }
    )
      .then(response => {
        // prints 200
        console.log(response.status);
      })
      .catch(response => {
        // prints 403
        console.log(response.status);

        // prints Permission denied
        console.log(response.error);
      });
  }

  /* Opens in browser, bad
  downloadDierenwelzijn(){
    window.open(this.pdfUrl, '_blank');
  }
  */

  ngOnInit() {
  }
}
