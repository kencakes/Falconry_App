import { Injectable } from '@angular/core';
import { FileOpener} from '@awesome-cordova-plugins/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';

@Injectable({
  providedIn: 'root'
})
export class PdfViewerService {
  fileTransfer: FileTransferObject;

  constructor( private fileOpener: FileOpener, private transfer: FileTransfer, private file: File) {}

  download(url: string, title: string) {
    this.fileTransfer = this.transfer.create();
    this.fileTransfer
      .download(url, this.file.dataDirectory + title + '.pdf')
      .then(entry => {
        console.log('download complete: ' + entry.toURL());
        this.fileOpener
          .open(entry.toURL(), 'application/pdf')
          .then(() => console.log('File is opened'))
          .catch(e => console.log('Error opening file', e));
      });
  }
}
