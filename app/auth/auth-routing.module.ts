import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoPageComponent } from '../no-page/no-page.component';
import { LoginComponent } from './login/login.component';
import { SellerSignupComponent } from './seller-signup/seller-signup.component';
import { UserSignupComponent } from './user-signup/user-signup.component';

const routes: Routes = [
  { component: LoginComponent, path: '' },
  { component: UserSignupComponent, path: 'user_signup' },
  { component: SellerSignupComponent, path: 'seller_signup' },
  { component: NoPageComponent, path: '**' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
