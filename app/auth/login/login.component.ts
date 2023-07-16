import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../../service/Api/post.service';
import { HelperService } from '../../service/Helper/helper';
import { SharedComponent } from '../../service/Shared/shared.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private postService: PostService,
    private route: Router,
    private SharedService: SharedComponent,
    private helperService: HelperService
  ) {}

  hide = true;
  loginForm = this.SharedService.loginForm;

  login() {
    console.log('final', this.loginForm.value);
    this.postService.login(this.loginForm.value).subscribe((res) => {
      console.log(res);
      if (res != null) {
        localStorage.setItem('token', res.jwt);
        const tokendata = this.helperService.haveAccessToken();
        console.log(tokendata.role);
        if (tokendata.role == 'admin') {
          this.route.navigate(['admin/product']);
          return;
        }
        this.route.navigate(['admin/home']);
      }
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  EmailError(): any {
    return this.SharedService.EmailError();
  }

  PasswordError(): any {
    return this.SharedService.PasswordError();
  }
}
