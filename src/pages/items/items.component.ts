import { Component, OnInit } from '@angular/core';
import { WishListComponent } from '../../pages/wish-list/wish-list.component';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

 
  public wishlist: any = [];
  public parentData :any =[];
  public enabled :boolean = false;
  
  constructor() { }

  ngOnInit() {
   
  }
  add(item) {
    if(! this.wishlist.includes(item)) {
      this.wishlist.push(item);
    }
    else {
      alert("The selected item is already added into the wishlist");
    }
    console.log("wishlist: ",this.wishlist);
     
  }
  wishlistEnable() {
    let length = this.wishlist.length;
    if(length == 0) {
      alert("There are no items added into wishlist.");
    }
    else {
      this.enabled = true;
    }
  }
  gotoHome() {
    this.enabled = false;
  }
}
