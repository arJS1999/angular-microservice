import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../../service/Api/post.service';
import { SharedComponent } from '../../service/Shared/shared.component';

@Component({
  selector: 'app-seller-signup',
  templateUrl: './seller-signup.component.html',
  styleUrls: ['./seller-signup.component.css'],
})
export class SellerSignupComponent {
  constructor(
    private SharedService: SharedComponent,
    private PostService: PostService,
    private route: Router
  ) {}
  hide: boolean = true;
  signupForm = this.SharedService.signupForm;

  signup() {
    console.log('result', this.signupForm.value);
    this.PostService.signupSeller(this.signupForm.value).subscribe((res) => {
      console.log(res);
      this.route.navigate(['']);
    });
  }

  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }

  get name() {
    return this.signupForm.get('name');
  }

  get phone() {
    return this.signupForm.get('phone');
  }

  PhoneError() {
    return this.SharedService.PhoneError();
  }

  NameError(): any {
    return this.SharedService.NameError();
  }

  EmailError(): any {
    return this.SharedService.EmailError();
  }

  PasswordError(): any {
    return this.SharedService.PasswordError();
  }
}
