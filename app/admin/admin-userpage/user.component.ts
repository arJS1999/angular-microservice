import { Component, OnInit } from '@angular/core';
import { PostService } from '../../service/Api/post.service';
import { HelperService } from '../../service/Helper/helper';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class AdminUserpageComponent implements OnInit {
  constructor(
    private postService: PostService,
    private helperService: HelperService
  ) {}

  displayedColumns: string[] = ['Id', 'User', 'Action'];
  userList: any = [];

  ngOnInit(): void {
    this.postService.getUser().subscribe((res: any) => {
      console.log(res);
      return (this.userList = res);
    });
  }

  delete(data: any) {
    console.log(data);
    const dialogRef = this.helperService.dialogBox();
    dialogRef.afterClosed().subscribe((dialogResult) => {
      console.log(dialogResult);
      if (dialogResult == true) {
        console.log('delete');
        this.postService.deleteUser(data.id).subscribe((res: any) => {
          console.log(res);
        });
        return;
      }
      console.log('passed');
    });
    this.ngOnInit();
  }
}
