import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { AdminCategorypageComponent } from './admin-categorypage/category.component';
import { AdminHomepageComponent } from './admin-homepage/home.component';
import { AdminProductpageComponent } from './admin-productpage/product.component';
import { AdminSidebarComponent } from './admin-sidebar/sidebar.component';
import { AdminSellerpageComponent } from './admin-sellerpage/seller.component';
import { AdminUserpageComponent } from './admin-userpage/user.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminCategorypageComponent,
    AdminHomepageComponent,
    AdminProductpageComponent,
    AdminSidebarComponent,
    AdminSellerpageComponent,
    AdminUserpageComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialComponentsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule {}
