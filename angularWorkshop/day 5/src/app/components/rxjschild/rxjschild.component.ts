import { Component, OnInit } from '@angular/core';
import { ObservblesService } from 'src/app/services/observbles.service';

@Component({
  selector: 'app-rxjschild',
  templateUrl: './rxjschild.component.html',
  styleUrls: ['./rxjschild.component.css']
})
export class RxjschildComponent implements OnInit {

  constructor(private observblesService: ObservblesService) { }
  dataFrmParent
  dataFromBehSub
  dataFromReplaySub = []
  posts
  profile
  ngOnInit(): void {
    this.observblesService.subjetEx.subscribe(res => {
      console.log(res)
      this.dataFrmParent = res
    })

    this.observblesService.behavioralEX.subscribe(res => {
      this.dataFromBehSub = res
    })

    //forkjoin
    this.observblesService.GetDataFromDiFFStream().subscribe(res => {
      console.log(res)
      this.posts=res[0]
      this.profile=res[1]
    })
  }
  subscribeReplaySub() {

    this.observblesService.replaySub.subscribe(res => {
      console.log(res)
      this.dataFromReplaySub.push(res)
    })
  }
}
