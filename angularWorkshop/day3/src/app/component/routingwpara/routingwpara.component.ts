import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-routingwpara',
  templateUrl: './routingwpara.component.html',
  styleUrls: ['./routingwpara.component.css']
})
export class RoutingwparaComponent implements OnInit {

  // Dependencies are services or objects that a class needs to perform its function. Dependency injection,
  //  or DI, is a design pattern in which a class requests dependencies from external sources rather than creating them.
  // Angular's DI framework provides dependencies to a class upon instantiation.
  //  You can use Angular DI to increase flexibility and modularity in your applications.

  constructor(private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.actRoute.params.subscribe(
      res => {
        console.log(res.id)
      }
    )

  }
  navigate(){
    this.router.navigate(['nextRoute'])
  }
}
