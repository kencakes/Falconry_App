import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Logbook } from '../types/logbook';
import { LogbookService } from '../services/logbook.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-logbook-test',
  templateUrl: './logbook-test.page.html',
  styleUrls: ['./logbook-test.page.scss'],
})
export class LogbookTestPage implements OnInit {
  logbook: Logbook[] = [];

  constructor(private logbookService: LogbookService, private cd: ChangeDetectorRef, public authService: AuthService) {
    this.logbookService.getLogbook().subscribe(res => {
      this.logbook = res;
      this.cd.detectChanges();
    });
  }

  ngOnInit() {
  }


}
