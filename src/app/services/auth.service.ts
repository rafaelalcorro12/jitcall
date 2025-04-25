import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private afStore: AngularFirestore
  ) { }

  registerUser(userData: any) {
    return this.afAuth.createUserWithEmailAndPassword(userData.correo, userData.password)
      .then(credential => {
        return this.afStore.doc(`users/${credential.user?.uid}`).set({
          uid: credential.user?.uid,
          nombre: userData.nombre,
          apellido: userData.apellido,
          telefono: userData.telefono,
          correo: userData.correo
        });
      });
  }

  loginUser(loginData: any) {
    return this.afAuth.signInWithEmailAndPassword(loginData.correo, loginData.password);
  }

  logoutUser() {
    return this.afAuth.signOut();
  }

  isAuthenticated() {
    return this.afAuth.authState;
  }

  getCurrentUser() {
    return this.afAuth.currentUser;
  }
}
