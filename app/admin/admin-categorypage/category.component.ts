import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../../service/Api/post.service';
import { SharedComponent } from '../../service/Shared/shared.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class AdminCategorypageComponent implements OnInit {
  constructor(
    private postService: PostService,
    private route: Router,
    private SharedService: SharedComponent
  ) {}

  categoryForm = this.SharedService.categoryForm;
  displayedColumns: string[] = ['Id', 'Category', 'Action'];
  categoryList: any = [];
  form: boolean = false;
  status: string = 'Edit Category';
  category_name: string = '';
  category_id: number = 0;
  limit: number = 2;
  page: number = 0;
  total_category: number = 0;

  ngOnInit(): void {
    this.postService
      .getCategory(this.limit, this.page)
      .subscribe((res: any) => {
        console.log(res);
        return (this.categoryList = res[0]), (this.total_category = res[1]);
      });
  }

  OnPageChange(event: any) {
    console.log(event);
    this.limit = event.pageSize;
    this.page = event.pageIndex;
    this.ngOnInit();
  }

  get name() {
    return this.categoryForm.get('name');
  }

  CategoryError() {
    return this.SharedService.CategoryError();
  }

  edit(data: any) {
    this.form = true;
    console.log(data);
    this.category_name = data.category_name;
    this.category_id = data.id;
  }

  add() {
    this.form = true;
    this.status = 'Add Category';
  }

  onSubmit() {
    this.form = false;
    console.log(this.categoryForm.value);
    if (this.category_id != 0) {
      this.postService
        .updateCategory(this.categoryForm.value, this.category_id)
        .subscribe((res: any) => {
          console.log(res);
        });
      this.category_id = 0;
      this.category_name = '';
    } else {
      this.postService
        .addCategory(this.categoryForm.value)
        .subscribe((res: any) => {
          console.log(res);
        });
    }
    this.ngOnInit();
  }
}
