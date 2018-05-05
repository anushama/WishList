import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  @Input('parentData') childMessage: any=[];
  
  constructor() {
    console.log(this.childMessage);
   }
  
  ngOnInit() {
  }
  delete(item) {
    var index = this.childMessage.indexOf(item);
    if (index !== -1) {
      this.childMessage.splice(index, 1);
      console.log("after removing......",this.childMessage);
    }
      
  }


}
