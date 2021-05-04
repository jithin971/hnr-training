import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Iuser } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';
import { ObservblesService } from 'src/app/services/observbles.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  constructor(private ds: DataService,private router:Router,private observblesService:ObservblesService) { }
  allUser:Observable<any>
  // asyncvar:Observable<Iuser>
  ngOnInit(): void {

    this.getData()
    this.observblesService.checkpipe()  
  }
  getData() {

    this.allUser=this.ds.getDataFromhttp()

    // this.ds.getDataFromhttp().subscribe(
    //   (res:Iuser[]) => {
    //     console.log("res",res)
    //     this.allUser = res}
    // )
  }
  asyncpipe() {
    return this.ds.getDataFromhttp()
  }
  deleteData(id) {
    this.ds.delete(id).subscribe(
      res => {
        this.getData()
      }
    )
  }

  updateData(data) {
    this.ds.toUpdate = data
    this.router.navigate(['user'])
  }

  checkIsArray(data){
    return Array.isArray(data)
  }
}
