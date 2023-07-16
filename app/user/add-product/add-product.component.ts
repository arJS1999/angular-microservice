import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addProduct } from '../../store/actions/product.action';
import { Product } from '../../store/model/product';
import { productState } from '../../store/reducers/user.reducer';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  constructor(private store: Store<productState>) {}

  ngOnInit(): void {}

  addProduct(productName: string) {
    const product = new Product();
    product.name = productName;
    this.store.dispatch(addProduct(product));
  }
}
