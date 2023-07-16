import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCategorypageComponent } from '../admin/admin-categorypage/category.component';
import { AdminGuard } from '../guard/admin.guard';
import { AdminHomepageComponent } from './admin-homepage/home.component';
import { AdminProductpageComponent } from './admin-productpage/product.component';
import { AdminSellerpageComponent } from './admin-sellerpage/seller.component';
import { AdminUserpageComponent } from './admin-userpage/user.component';
import { AdminSidebarComponent } from './admin-sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { NoPageComponent } from '../no-page/no-page.component';

const routes: Routes = [
  {
    component: AdminSidebarComponent,
    path: '',
    children: [
      {
        component: NavbarComponent,
        path: '',
        children: [
          {
            component: AdminProductpageComponent,
            path: 'product',
            canActivate: [AdminGuard],
          },
          {
            component: AdminHomepageComponent,
            path: 'home',
            canActivate: [AdminGuard],
          },
          {
            component: AdminCategorypageComponent,
            path: 'category',
            canActivate: [AdminGuard],
          },
          {
            component: AdminUserpageComponent,
            path: 'user',
            canActivate: [AdminGuard],
          },
          {
            component: AdminSellerpageComponent,
            path: 'seller',
            canActivate: [AdminGuard],
          },
          { component: NoPageComponent, path: '**' },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
