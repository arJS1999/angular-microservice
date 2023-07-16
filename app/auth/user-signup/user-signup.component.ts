import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../../service/Api/post.service';
import { SharedComponent } from '../../service/Shared/shared.component';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css'],
})
export class UserSignupComponent {
  constructor(
    private SharedService: SharedComponent,
    private PostService: PostService,
    private route: Router
  ) {}
  hide: boolean = true;
  signupForm = this.SharedService.signupForm;

  signup() {
    console.log('result', this.signupForm.value);
    this.PostService.signupUser(this.signupForm.value).subscribe((res) => {
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
