import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConstantsService } from 'src/app/config/constants.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  gotoLogin() {
    this.router.navigate([ConstantsService.getPath('LOGIN')]);
  }
  gotoHome() {
    this.router.navigate([ConstantsService.getPath('HOME')]);
  }
}
