import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-itemlist2',
  templateUrl: './itemlist2.component.html',
  styleUrls: ['./itemlist2.component.css']
})
export class Itemlist2Component implements OnInit {

  employee

  constructor(private router: Router, private dataService: DataService) { 
    this.employee=dataService.employee
  }

  ngOnInit(): void {
  }


  navigate(id) {
    this.router.navigate(['childroute/details', id])
  }
}
