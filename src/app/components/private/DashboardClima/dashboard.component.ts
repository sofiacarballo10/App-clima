import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ConstantsService } from 'src/app/config/constants.service';
import { Clima } from 'src/app/models/clima.model';
import { DashboardService } from 'src/app/services/dashboard.service';
import { Table } from 'primeng/table';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {

  arrClima: Array< Clima|any> =[];
  ciudadInput: String = "";
  filter="";
  first = 0;

  rows = 10;


  constructor(private router: Router, private dashboardService: DashboardService) {
    this.ciudadInput = "";
  }

  ngOnInit() {
    console.dir(this.arrClima);
  }

  gotoDashboard() {
    this.router.navigate([ConstantsService.getPath('HOME') + '/' + ConstantsService.getPath('DASHBOARD')]);
  }

  onClick(ciudadInput: String){
    this.dashboardService.getDashboard(ciudadInput).then(response => {
        console.dir(response);
        if (response.code != "GENERAL_ERROR"){
          this.arrClima.push(response)
          this.arrClima = JSON.parse(JSON.stringify(this.arrClima));
        }else{
          console.log("no existe la ciudad");
        }
      });
  }

  exit() {
    location.reload();
  }

  next() {
    this.first = this.first + this.rows;
}

prev() {
    this.first = this.first - this.rows;
}

reset() {
    this.first = 0;
}


}
