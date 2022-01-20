import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as es from '../../assets/i18n/es.json';

@Injectable({
  providedIn: 'root',
})
export class ConstantsService {
  public static API: string = `${environment.API_PROTOCOL}${environment.API_HOST}${environment.API_PORT}${environment.API_PREFIX}`;

  /* endpoints de servicios */
  public static URIS: any = {
    login: "/login",
    clima: ""
    
  };

  /* codigos de devolucion de servicios */
  public static CODES: any = {
    EXECUTION_OK: 'EXECUTION_OK',
    GENERAL_ERROR: 'GENERAL_ERROR',
    EXTERNAL_API_ERROR: 'EXTERNAL_API_ERROR',
    OPERATION_OK: 'OPERATION_OK',
  };

  /* 1 objeto por idioma con todos los paths de cada pantalla */
  public static PATHS: any = {
    es: {
      LANDING: 'inicio',
      LOGIN: 'login',
      HOME: 'home',
      DASHBOARD: 'dashboard',
    },
  };

  constructor() {}

  public static getCurrentLocale(): string {
    return localStorage.getItem('lang') || environment.DEFAULT_LANG;
  }

  /* Obtencion del path para colocar en las rutas y navigate */
  public static getPath(path: string): string {
    let _path: string = '';
    _path = this.PATHS[this.getCurrentLocale()][path] as string;
    return _path;
  }

  /* Obtencion de traduccion para uso en componentes (solo en parte de logica ts) */
  public static getKey(key: string) {
    let value: string = '';
    if (this.getCurrentLocale() === 'es') {
      value = (es as any)[key] || key;
    }
    return value;
  }
}
