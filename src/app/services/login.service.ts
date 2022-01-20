import { Injectable } from '@angular/core';
import { HttpManagerService } from 'src/app/common/services/http-manager.service';
import { ConstantsService } from '../config/constants.service';
import { SessionService } from '../services/session.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private http: HttpManagerService,
    private session: SessionService
  ) {}

  async login(data: any): Promise<any> {
    let response: any;
    console.log(data);
      let mappedData = {
        username: data.username,
        password: data.password,
      };
     if (data.username == "sofiaCarballo" && data.password === "sofia") {
       response = {
         code: ConstantsService.CODES.EXECUTION_OK,
         data: {
           "firstName": "Sofia",
           "lastName": "Carballo",
           "role": "admin",
           "status": "LOGIN_OK",
           "loginTime": "2022-01-06T16:32:32.955+00:00",
           "securityToken": "xxxxxokkfdsfds",
           "userName": "SofiaCarballo"
         }
       };
       this.session.setSession(response.data);
       return response;
     }
    response = {
      code: ConstantsService.CODES.GENERAL_ERROR,
    };
     return response;
  }
}
