import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConstantsService } from 'src/app/config/constants.service';

@Injectable({
  providedIn: 'root',
})
export class HttpManagerService {
  constructor(private http: HttpClient) {}

  get(url: string, headers: any = {}) {
    return this.http.get(`${ConstantsService.API}${url}`, {
      headers: headers,
    });
  }
  post(url: string, body: any, headers: any = {}) {
    return this.http.post(`${ConstantsService.API}${url}`, body, {
      headers: headers,
    });
  }
  put(url: string, body: any, headers: any = {}) {
    return this.http.put(`${ConstantsService.API}${url}`, body, {
      headers: headers,
    });
  }
}
