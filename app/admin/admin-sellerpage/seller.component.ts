import { Component } from '@angular/core';
import { PostService } from '../../service/Api/post.service';
import { HelperService } from '../../service/Helper/helper';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css'],
})
export class AdminSellerpageComponent {
  constructor(
    private postService: PostService,
    private helperService: HelperService
  ) {}

  displayedColumns: string[] = ['Id', 'Seller', 'Action'];
  sellerList: any = [];

  ngOnInit(): void {
    this.postService.getSeller().subscribe((res: any) => {
      console.log(res);
      return (this.sellerList = res);
    });
  }

  delete(data: any) {
    console.log(data);
    const dialogRef = this.helperService.dialogBox();
    dialogRef.afterClosed().subscribe((dialogResult) => {
      console.log(dialogResult);
      if (dialogResult == true) {
        console.log('delete');
        this.postService.deleteSeller(data.id).subscribe((res: any) => {
          console.log(res);
        });
        return;
      }
      console.log('passed');
    });
    this.ngOnInit();
  }
}
