import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConstantsService } from 'src/app/config/constants.service';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm: any;
  constructor(private router: Router, private loginServices: LoginService, private fb: FormBuilder) {
    this.loginForm= this.fb.group({
      username: ["",[Validators.required]],
      password: ["",[Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  gotoDashboard() {

    this.loginServices.login(this.loginForm.value).then(res=>{
      console.log(res)
      if(res.code=== ConstantsService.CODES.EXECUTION_OK&&res.data.securityToken){
        this.router.navigate([ConstantsService.getPath('HOME')+"/"+ConstantsService.getPath('DASHBOARD')]);

      }
    })
  }

  onSubmit(){
    this.gotoDashboard();
  }
}
