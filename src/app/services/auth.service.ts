import { Injectable } from '@angular/core';
import { FirebaseAuthentication } from '@robingenz/capacitor-firebase-authentication';
import { Router } from '@angular/router';
import { Auth, signInWithCredential, signOut } from '@angular/fire/auth';
import { updateProfile, GoogleAuthProvider, PhoneAuthProvider, FacebookAuthProvider, TwitterAuthProvider, signInAnonymously,
  User } from 'firebase/auth';
import { Capacitor } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: null | User = null;
  private verificationId: string;

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
    // Sign in on the native layer
    const {credential: {idToken, accessToken}} = await FirebaseAuthentication.signInWithTwitter();

    // Sign in on the web layer
    if (Capacitor.isNativePlatform()) {
      const credential = TwitterAuthProvider.credential(idToken, accessToken);
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
    // Sign in on the native layer
    const {credential: {accessToken}} = await FirebaseAuthentication.signInWithFacebook();

    // Sign in on the web layer
    if (Capacitor.isNativePlatform()) {
      const credential = FacebookAuthProvider.credential(accessToken);
      await signInWithCredential(this.auth, credential);
    }
  }

  async signInWithPhoneNumber(verificationCode: string): Promise<void> {
    if (!Capacitor.isNativePlatform()) {
      return;
    }
    const credential = PhoneAuthProvider.credential(this.verificationId, verificationCode);
    await signInWithCredential(this.auth, credential);
  };

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
