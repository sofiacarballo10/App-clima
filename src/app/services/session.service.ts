import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private currentSession: any;

  constructor() {
    let lang;
    let oldSession = localStorage.getItem('session');
    if (oldSession) {
      this.setSession(JSON.parse(oldSession));
    }
    lang = environment.DEFAULT_LANG; //seteo de idioma (capaz cambie la logica aca)
    this.setUserLang(lang);
  }

  setUserLang(lang: string) {
    localStorage.setItem('lang', lang);
  }
  getUserLang() {
    return localStorage.getItem('lang') || environment.DEFAULT_LANG;
  }

  setSession(data: any) {
    this.currentSession = data;
    localStorage.setItem('session', JSON.stringify(this.currentSession));
    /* console.log(this.currentSession); */
    localStorage.setItem('token', this.currentSession.token || '');
  }

  getSession() {
    return this.currentSession;
  }

  isUserLogged(): boolean {
    return this.currentSession && this.currentSession.token;
  }

  getToken(): string {
    return this.currentSession.token ? this.currentSession.token : '';
  }

  /* Agrga o modifica variables en session segun objeto entregado */
  setUserData(data: any) {
    this.currentSession = { ...this.currentSession, ...data };
    this.setSession(this.currentSession);
  }

  getUserName() {
    return this.currentSession.userName;
  }

  clearSession() {
    this.currentSession = {};
    this.setSession(this.currentSession);
  }

  getAuthorizationHeader() {
    return { Authorization: `Bearer ${this.getToken()}` };
  }
}
