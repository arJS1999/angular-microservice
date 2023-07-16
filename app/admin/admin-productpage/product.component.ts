import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { PostService } from '../../service/Api/post.service';
import { HelperService } from '../../service/Helper/helper';
import { SharedComponent } from '../../service/Shared/shared.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class AdminProductpageComponent implements OnInit {
  constructor(
    private postService: PostService,
    private SharedService: SharedComponent,
    private helperService: HelperService
  ) {}

  productForm = this.SharedService.productForm;
  displayedColumns: string[] = ['Id', 'Product', 'Price', 'Image', 'Actions'];
  productList: any = [];
  form: boolean = false;
  preview: boolean = true;
  status: string = 'Edit Product';
  product_name: string = '';
  product_price: number = 0;
  category_id: number = 0;
  product_id: number = 0;
  product_image: string = '';
  color: ThemePalette = 'primary';
  limit: number = 2;
  page: number = 0;
  total_product: number = 0;

  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;

  ngOnInit(): void {
    this.postService.getProduct(this.limit, this.page).subscribe((res: any) => {
      console.log(res);
      return (this.productList = res[0]), (this.total_product = res[1]);
    });
  }

  OnPageChange(event: any) {
    console.log(event);
    this.limit = event.pageSize;
    this.page = event.pageIndex;
    this.ngOnInit();
  }

  add() {
    this.preview = false;
    this.form = true;
    this.status = 'Add Product';
  }

  onSubmit() {
    console.log(this.productForm.value);
    const data: any = this.productForm.value;
    const formdata = new FormData();
    formdata.append('name', data.name);
    formdata.append('image', data.image);
    formdata.append('product', data.product);
    formdata.append('price', data.price);
    console.log(formdata);
    if (this.product_id != 0) {
      this.postService
        .updateProduct(formdata, this.product_id)
        .subscribe((res: any) => {
          console.log(res);
        });
    } else {
      this.postService.addProduct(formdata).subscribe((res: any) => {
        console.log(res);
      });
    }
    this.preview = true;
    this.status = 'Edit Product';
    this.ngOnInit();
    this.form = false;
  }

  edit(data: any) {
    this.form = true;
    this.product_name = data.product_name;
    this.product_price = data.product_price;
    this.category_id = data.productId;
    this.product_image = data.product_image;
    this.product_id = data.id;
    console.log(data);
  }

  delete(data: any) {
    console.log(data);
    const dialogRef = this.helperService.dialogBox();
    dialogRef.afterClosed().subscribe((dialogResult) => {
      console.log(dialogResult);
      if (dialogResult == true) {
        console.log('delete');
        this.postService.deleteProduct(data.id).subscribe((res: any) => {
          console.log(res);
        });
        return;
      }
      console.log('passed');
    });
    this.ngOnInit();
  }

  ProductNameError() {
    return this.SharedService.ProductNameError();
  }

  ProductPriceError() {
    return this.SharedService.ProductPriceError();
  }

  ProductIdError() {
    return this.SharedService.ProductIdError();
  }

  ProductImageError() {
    return this.SharedService.ProductImageError();
  }

  get name() {
    return this.productForm.get('name');
  }

  get price() {
    return this.productForm.get('price');
  }

  get productId() {
    return this.productForm.get('product');
  }

  get image() {
    return this.productForm.get('image');
  }
}
