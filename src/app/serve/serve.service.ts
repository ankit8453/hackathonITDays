import { Injectable } from '@angular/core';
import {Serve} from './serve';
import { collectionData, deleteDoc, Firestore, updateDoc } from '@angular/fire/firestore';
import { addDoc, doc, collection } from '@firebase/firestore';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServeService {

  constructor(private fs:Firestore) {}

  //Add new data
  addNote(note:Serve){
  note.id = doc(collection(this.fs, 'id')).id
  return addDoc(collection(this.fs, 'Notes'),note)
  }

  //get All notes from Database
  getNotes():Observable<Serve[]>{
  let noteRef = collection(this.fs, 'Notes')
  return collectionData(noteRef, {idField: 'id'}) as Observable<Serve[]>
}

//Delete Note
  deleteNote(note: Serve){
  let docRef =doc(collection(this.fs, `Notes/${note.id}`));

  return deleteDoc(docRef)
}

//Update Notes
UpdateNote(note: ServeService, notes:any){
  let docRef =doc(this.fs, `Notes/{note.id}`);
  return updateDoc(docRef, notes)
}
}

