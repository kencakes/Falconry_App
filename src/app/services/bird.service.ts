import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Bird{
  id?: string;
  about: string;
  category: string;
  image: string;
  latijns: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})

export class BirdService {

  constructor(private firestore: Firestore) { }

  // Ophalen birds
  getBirds(): Observable<Bird[]> {
    const birdsRef = collection(this.firestore, 'birds');
    return collectionData(birdsRef, { idField: 'id'}) as Observable<Bird[]>;
  }

  // Gets the ID
  getBirdById(id): Observable<Bird> {
    const birdDocRef = doc(this.firestore, `birds/${id}`);
    return docData(birdDocRef, { idField: 'id' }) as Observable<Bird>;
  }
}
