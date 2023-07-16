import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserCartpageComponent } from '../user/user-cartpage/user-cartpage.component';
import { UserOrderpageComponent } from '../user/user-orderpage/user-orderpage.component';
import { UserProductpageComponent } from '../user/user-productpage/user-productpage.component';
import { UserSidebarComponent } from '../user/user-sidebar/user-sidebar.component';
import { AddProductComponent } from './add-product/add-product.component';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from '../navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserCartpageComponent,
    UserOrderpageComponent,
    UserProductpageComponent,
    UserSidebarComponent,
    AddProductComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialComponentsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
})
export class UserModule {}
