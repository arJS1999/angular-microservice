import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PostService } from '../../service/Api/post.service';
import { addCart } from '../../store/actions/product.action';
import { Cart } from '../../store/model/product';
import { productState } from '../../store/reducers/user.reducer';
import { selectCarts } from '../../store/selector/product.selector';

@Component({
  selector: 'app-user-cartpage',
  templateUrl: './user-cartpage.component.html',
  styleUrls: ['./user-cartpage.component.css'],
})
export class UserCartpageComponent implements OnInit {
  cartList!: any;
  constructor(
    private postService: PostService,
    private store: Store<productState>
  ) {
    this.postService.listCart().subscribe((res: any) => {
      console.log(res.cart);
      const Cart: any = res.cart;
      this.postService.cartProduct(res.product).subscribe((cartdata: any) => {
        console.log(cartdata);
        let cartItem: any = cartdata.map((e: any) => {
          for (let cart of Cart) {
            if (cart.product_id == e.id) {
              console.log(e, cart);
              return { ...e, quantity: cart.quantity };
            }
          }
        });
        console.log(cartItem);
        this.store.dispatch(addCart(cartItem));
      });
    });
  }
  displayedColumns: string[] = [
    'Product',
    'Image',
    'Price',
    'Quantity',
    'Total',
    'Action',
  ];

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;

  ngOnInit(): void {
    this.store.pipe(select(selectCarts)).subscribe((x: any) => {
      return (this.cartList = x[0]);
    });
  }

  getTotal() {
    console.log(this.cartList);
    return this.cartList
      .map((t: any) => parseInt(t.product_price) * t.quantity)
      .reduce((total: number, price: number) => total + price, 0);
  }

  delete(data: any) {
    console.log(data);
  }

  buy() {
    console.log('buy product');
  }
}
