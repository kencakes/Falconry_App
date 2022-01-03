import { Injectable } from '@angular/core';
import { Firestore, collection, doc, docData, collectionData, addDoc, CollectionReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Logbook } from '../types/logbook';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LogbookService {

  constructor(private firestore: Firestore, private authService: AuthService) { }

  // Ophalen logboeken
  getLogbook(): Observable<Logbook[]> {
    const logbookRef = collection(this.firestore, 'logbook');
    return collectionData(logbookRef, { idField: 'id'}) as Observable<Logbook[]>;
  }

  // Gets the ID
  getLogbookById(id): Observable<Logbook> {
    const logbookDocRef = doc(this.firestore, `logbook/${id}`);
    return docData(logbookDocRef, { idField: 'id' }) as Observable<Logbook>;
  }

  // Create logbook entry
  async creatLogbook(name, date, latin, food, amount): Promise<void> {
    const newLog: Logbook = {
      date,
      name,
      latin,
      food,
      amount,
      user: this.authService.getUserUID()
    };
    await addDoc<Logbook>(this.getCollectionRef<Logbook>('logbook'), newLog);
  }

  private getCollectionRef<T>(collectionName: string): CollectionReference<T> {
    return collection(this.firestore, collectionName) as CollectionReference<T>;
  }
}
