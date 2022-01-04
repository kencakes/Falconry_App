import { Injectable } from '@angular/core';
import { Firestore, collection, doc, docData, collectionData, addDoc, CollectionReference,
  deleteDoc, DocumentReference } from '@angular/fire/firestore';
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
  getLogbookByUserId(id): Observable<Logbook> {
    const logbookDocRef = doc(this.firestore, `logbook/${id}`);
    return docData(logbookDocRef, { idField: 'id' }) as Observable<Logbook>;
  }

  // Create logbook entry
  async creatLogbook(name, food, amount, date, time, weight): Promise<void> {
    const newLog: Logbook = {
      name,
      food,
      amount,
      date,
      time,
      weight,
      user: this.authService.getUserUID()
    };
    await addDoc<Logbook>(this.getCollectionRef<Logbook>('logbook'), newLog);
  }

  // Delete a specific logbook entry
  async deleteLogbook(logbook: string, id: string): Promise<void>{
    await deleteDoc(this.getDocumentRef(logbook, id));
  }

  private getCollectionRef<T>(collectionName: string): CollectionReference<T> {
    return collection(this.firestore, collectionName) as CollectionReference<T>;
  }

  private getDocumentRef<T>(collectionName: string, id: string): DocumentReference<T> {
    return doc(this.firestore, `${collectionName}/${id}`) as DocumentReference<T>;
  }
}
