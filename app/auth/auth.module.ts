import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SellerSignupComponent } from './seller-signup/seller-signup.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    SellerSignupComponent,
    UserSignupComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialComponentsModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
