import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  ConfirmDialogModel,
  DialogBoxComponent,
} from 'src/app/dialog-box/dialog-box.component';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor(public dialog: MatDialog) {}

  getToken() {
    return localStorage.getItem('token') || '';
  }

  loggedIn() {
    console.log('pass');
    return localStorage.getItem('token') != null;
  }

  haveAccessAdmin() {
    const tokendata = this.haveAccessToken();
    if (tokendata?.role == 'admin') {
      return true;
    }
    return false;
  }

  haveAccessToken() {
    let token = localStorage.getItem('token');
    if (token) {
      let extract: any = token.split('.')[1];
      let decode = atob(extract);
      console.log(decode);
      let tokendata = JSON.parse(decode);
      console.log(tokendata);
      return tokendata;
    }
  }

  dialogBox() {
    const message = `Are you sure want to delete?`;
    const dialogData = new ConfirmDialogModel('Confirm Action', message);
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      maxWidth: '400px',
      data: dialogData,
    });
    return dialogRef;
  }
}
