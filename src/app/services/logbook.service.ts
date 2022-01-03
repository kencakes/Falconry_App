import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Logbook{
  id?: string;
  amount: string;
  date: Date;
  food:  string;
  latin: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class LogbookService {

  constructor() { }
}
