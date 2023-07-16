import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PostService } from '../../service/Api/post.service';
import { Product } from '../../store/model/product';
import { productState } from '../../store/reducers/user.reducer';
import { selectProducts } from '../../store/selector/product.selector';

@Component({
  selector: 'app-user-productpage',
  templateUrl: './user-productpage.component.html',
  styleUrls: ['./user-productpage.component.css'],
})
export class UserProductpageComponent implements OnInit {
  products!: Observable<Product[]>;
  constructor(
    private postService: PostService,
    private store: Store<productState>
  ) {
    this.products = this.store.pipe(select(selectProducts));
  }

  productlist: any = [];

  ngOnInit(): void {
    this.postService.relationProduct().subscribe((res: any) => {
      console.log(res);
      return (this.productlist = res);
    });
  }

  addCart(e: any) {
    console.log(e);
    this.postService.addCart(e.id).subscribe((res: any) => {
      console.log(res);
    });
  }
}
