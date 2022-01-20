import { Injectable } from '@angular/core';
import { HttpManagerService } from 'src/app/common/services/http-manager.service';
import { SessionService } from '../services/session.service';
import { HttpClient } from '@angular/common/http';
import {Clima} from "../models/clima.model";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  arrClima: Array<Clima | any> = [];

  constructor(
    private http: HttpManagerService,
    private session: SessionService,
    private httpClient: HttpClient ) {

  }

  async getDashboard(ciudadInput: String): Promise<any> {
    let response: any;
    try {
      response = await this.httpClient
        .get("https://api.openweathermap.org/data/2.5/weather?q="+ ciudadInput + "&appid=b6b1ed35af5f4156a4815b5af5f453e2")
        .toPromise();
    } catch (error) {
      console.dir(error);
      response = {
        data: {},
      };
    }
    return response;
  }

  getAll() {
    return this.arrClima;
  }

}



