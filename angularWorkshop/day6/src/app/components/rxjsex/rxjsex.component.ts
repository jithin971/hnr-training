import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ObservblesService } from 'src/app/services/observbles.service';

@Component({
  selector: 'app-rxjsex',
  templateUrl: './rxjsex.component.html',
  styleUrls: ['./rxjsex.component.css']
})
export class RxjsexComponent implements OnInit,AfterViewInit {

  @ViewChild('favActor')favActor:ElementRef
  constructor(private observblesService:ObservblesService) { }

  ngOnInit(): void {
  }
  sentData(){
    this.observblesService.subjetEx.next("Trigger 1")
  }
  sentDataToBehavSub(){
    this.observblesService.behavioralEX.next("Trigger B SUBJECT")
  }
  ngAfterViewInit(){
    console.log(this.favActor)
    this.favActor.nativeElement.value="mohalal"
  }

}
