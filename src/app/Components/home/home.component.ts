import { Component, OnInit, ViewChild } from '@angular/core';
import { Feed } from 'src/app/Models/feed';
import { FeedService } from 'src/app/Services/feed.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allItems: Feed[];
  selectedItems: Feed[];
  selectedItem: Feed;
  @ViewChild('closebutton') closebutton;
  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
    this.feedService.getFeed().subscribe((data: Feed[]) => {
      this.allItems = data;
      this.selectedItems = this.allItems;
    });
  }

  addToCart(){
    let items = localStorage.getItem('cartItems');
    let cartItems = items ? JSON.parse(localStorage.getItem('cartItems')) : [];
    cartItems.push(this.selectedItem)
    localStorage.setItem('cartItems',JSON.stringify(cartItems));
    this.closebutton.nativeElement.click();
  }

  addToCartItem(index){
    this.selectedItem = this.selectedItems[index];
  }

  onCloseClick(){
    this.selectedItem = null;
  }

  onSearchInputChange(event) {
    if (event.target.value === "") {
      this.selectedItems = this.allItems;
    }
    else {
      this.selectedItems = this.allItems.filter(val => val.name.toLowerCase().includes(event.target.value.toLowerCase()));
    }
  }


}
