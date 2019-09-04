import { OrderService } from './../../../../shared/services/search-repository.service';
import { Component, OnInit } from '@angular/core';
import { IOrders } from 'src/app/core/models/OrderInterface';

@Component({
  selector: 'app-popular-product',
  templateUrl: './popular-product.component.html',
  styleUrls: ['./popular-product.component.scss']
})
export class PopularProductComponent implements OnInit {
  constructor(private orderList: OrderService) {}

  ngOnInit() {
    this.getOrderlist();
  }

  public getOrderlist() {
    this.orderList.getMostPopularProduct().subscribe((resp: IOrders[]) => {
      console.log(resp);
    });
  }
}
