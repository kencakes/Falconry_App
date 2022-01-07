import { Injectable } from '@angular/core';
import { Achievement } from '../types/achievement';
import { AuthService } from './auth.service';
import { Firestore, collection, doc, updateDoc, collectionData, addDoc, CollectionReference, deleteDoc,
  DocumentReference, docData } from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AchievementService {

  constructor(private authService: AuthService, private firestore: Firestore) { }

  // Ophalen achievements
  getAchievements(): Observable<Achievement[]> {
    const achievementRef = collection(this.firestore, 'achievements');
    return collectionData(achievementRef, { idField: 'id'}) as Observable<Achievement[]>;
  }

  // Gets the ID
  getAchievementById(id): Observable<Achievement> {
    const achievementDocRef = doc(this.firestore, `achievements/${id}`);
    return docData(achievementDocRef, { idField: 'id' }) as Observable<Achievement>;
  }

  // Creates an achievement
  async createAchievement(amount, date, prey, birdName, comment): Promise<void> {
    const newAchievement: Achievement = {
      amount,
      date,
      prey,
      birdName,
      comment,
      user: this.authService.getUserUID()
    };
    await addDoc<Achievement>(this.getCollectionRef<Achievement>('achievement'), newAchievement);
  }

  // Updates an achievement
  async updateAchievement(fbCollection: string, id: string, amount, date, prey, birdName, comment): Promise<void> {
    const achievement: Achievement = {
      amount,
      date,
      prey,
      birdName,
      comment,
      user: this.authService.getUserUID()
    };
    await updateDoc(this.getDocumentRef(fbCollection, id), achievement);
  }

  // Deletes a specific achievement
  async deleteAchievement(achievement: string, id: string): Promise<void>{
    await deleteDoc(this.getDocumentRef(achievement, id));
  }

  private getCollectionRef<T>(collectionName: string): CollectionReference<T> {
    return collection(this.firestore, collectionName) as CollectionReference<T>;
  }

  private getDocumentRef<T>(collectionName: string, id: string): DocumentReference<T> {
    return doc(this.firestore, `${collectionName}/${id}`) as DocumentReference<T>;
  }
}
