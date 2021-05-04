import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  constructor(private dataService:DataService) { }
  // itemID
  // itemName
  // price
  // quantity
  // offer
  ngOnInit(): void {
  }

  // saveData(){
  //   this.dataService.saveData({itemID:this.itemID,itemName:this.itemName,price:this.price})
  // }

  onSubmit(form) {
    if (form.valid) {
      console.log(form.value);
    }
  }

  canDeactivate(){
    return this.dataService.item.length>0
  }
}
