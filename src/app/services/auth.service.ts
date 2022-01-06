import { Injectable } from '@angular/core';
import { FirebaseAuthentication } from '@robingenz/capacitor-firebase-authentication';
import { Router } from '@angular/router';
import { Auth, signInWithCredential, signOut, signInWithEmailAndPassword, sendPasswordResetEmail } from '@angular/fire/auth';
import { updateProfile, GoogleAuthProvider, FacebookAuthProvider, createUserWithEmailAndPassword, TwitterAuthProvider,
  signInAnonymously, User } from 'firebase/auth';
import { Capacitor } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: null | User = null;

  constructor(public auth: Auth, public router: Router) {
    this.auth.onAuthStateChanged(user => this.setCurrentUser(user));
  }

  isLoggedIn(): boolean {
    return this.currentUser !== null;
  }

  getProfilePic(): string {
    return this.currentUser && this.currentUser.photoURL ? this.currentUser.photoURL : '/assets/Portrait_Placeholder.png';
  }

  getDisplayName(): string | undefined {
    return this.currentUser ? this.currentUser.displayName : undefined;
  }

  getEmail(): string | undefined {
    return this.currentUser ? this.currentUser.email : undefined;
  }

  getUserUID(): string | undefined {
    return this.currentUser ? this.currentUser.uid : undefined;
  }

  async signOut(): Promise<void> {
    await FirebaseAuthentication.signOut();

    if (Capacitor.isNativePlatform()) {
      await signOut(this.auth);
    }
  }

  async signInWithGoogle(): Promise<void> {
    // Sign in on the native layer
    const {credential: {idToken, accessToken}} = await FirebaseAuthentication.signInWithGoogle();

    // Sign in on the web layer
    if (Capacitor.isNativePlatform()) {
      const credential = GoogleAuthProvider.credential(idToken, accessToken);
      await signInWithCredential(this.auth, credential);
    }
  }

  async signInWithTwitter(): Promise<void>{
    const {credential: {idToken, secret}} = await FirebaseAuthentication.signInWithTwitter();

    if (Capacitor.isNativePlatform()) {
      const credential = TwitterAuthProvider.credential(idToken, secret);
      await signInWithCredential(this.auth, credential);
    }
  }

  signInAnonymously(){
    signInAnonymously(this.auth)
      .then(() => {
        // Signed in..
      });
  }

  async signInWithFacebook(): Promise<void>{
    const {credential: {accessToken}} = await FirebaseAuthentication.signInWithFacebook();

    if (Capacitor.isNativePlatform()) {
      const credential = FacebookAuthProvider.credential(accessToken);
      await signInWithCredential(this.auth, credential);
    }
  }

  async createEmailUser(email: string, password: string): Promise<void>{
    await createUserWithEmailAndPassword(this.auth, email, password);
  }

  async signInEmailUser(email: string, password: string): Promise<void>{
    await signInWithEmailAndPassword(this.auth, email, password);
  }

  async resetEmailPassword(email: string): Promise<void>{
    return sendPasswordResetEmail(this.auth, email);
  }

  async updateDisplayName(displayName: string): Promise<void> {
    await updateProfile(this.auth.currentUser, {
      displayName
    });
  }

  private async setCurrentUser(user: User): Promise<void> {
    this.currentUser = user;
    if (this.currentUser) {
      await this.router.navigate(['/']);
    } else {
      await this.router.navigate(['/login']);
    }
  }
}
