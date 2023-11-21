import { Injectable, inject } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile}  from 'firebase/auth'
import { User } from '../models/user.model';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import {getFirestore, setDoc, doc,getDoc} from '@angular/fire/firestore'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore);


  //=======autenticacion uwu ============

  //accedemos :P
  signIn(user: User){
    return signInWithEmailAndPassword(getAuth(),user.email, user.password );

  }
//Crear usuario


  signUp(user: User){
    return createUserWithEmailAndPassword(getAuth(),user.email, user.password );

  }

  //Actualizar Usuario
  updateUser(displayName: string){
    return updateProfile(getAuth().currentUser,{displayName})
  }


  //======================BASE DE DATOS=======================

  setDocument(path: string, data: any){
    return setDoc(doc(getFirestore(),path),data);


  }
  async getDocument(path: string){
   return (await getDoc(doc(getFirestore(),path))).data()

  }
  obtenerClases(): Observable<any[]> {
    return this.firestore.collection('clases').valueChanges();
  }




}
