import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  employeeID
  empdetails
  usingsnapshot
  constructor(private activatedRoute: ActivatedRoute, private dataser: DataService) {
    activatedRoute.params.subscribe(res => {
      console.log(res)
      this.employeeID = res.id
      this.empdetails = this.dataser.getDetails(this.employeeID)[0]
      console.log(this.dataser.getDetails(this.employeeID))
    })
  }

  ngOnInit(): void {
  }

}
