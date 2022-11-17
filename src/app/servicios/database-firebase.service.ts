import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, CollectionReference, deleteDoc, doc, docData, DocumentData, Firestore, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { PlayaI } from '../interfaces/playa-i';

@Injectable({
  providedIn: 'root'
})
export class DatabaseFirebaseService {
  private playaCollection: CollectionReference<DocumentData>;

  constructor(private readonly firestore: Firestore) {
    this.playaCollection = collection(this.firestore, 'playa');
  }

  getAll() {
    return collectionData(this.playaCollection, {
      idField: 'id',
    }) as Observable<PlayaI[]>;
  }

  get(id: string) {
    const playaDocumentReference = doc(this.firestore, `playa/${id}`);
    return docData(playaDocumentReference, { idField: 'id' });
  }

  create(playa: PlayaI) {
    console.log(playa);
    
    return addDoc(this.playaCollection, playa);
  }

  update(playa: PlayaI) {
    const playaDocumentReference = doc(
      this.firestore,
      `playa/${playa.id}`
    );
    return updateDoc(playaDocumentReference, { ...playa });
  }

  delete(id: string) {
    const playaDocumentReference = doc(this.firestore, `playa/${id}`);
    return deleteDoc(playaDocumentReference);
  }
}
