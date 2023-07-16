import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { UserCartpageComponent } from './user-cartpage/user-cartpage.component';
import { UserOrderpageComponent } from './user-orderpage/user-orderpage.component';
import { UserProductpageComponent } from './user-productpage/user-productpage.component';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';
import { AddProductComponent } from './add-product/add-product.component';
import { NoPageComponent } from '../no-page/no-page.component';
import { NavbarComponent } from '../navbar/navbar.component';

const routes: Routes = [
  {
    component: UserSidebarComponent,
    path: '',
    children: [
      {
        component: NavbarComponent,
        path: '',
        children: [
          {
            component: UserProductpageComponent,
            path: 'product',
            canActivate: [AuthGuard],
          },
          {
            component: UserCartpageComponent,
            path: 'cart',
            canActivate: [AuthGuard],
          },
          {
            component: UserOrderpageComponent,
            path: 'order',
            canActivate: [AuthGuard],
          },
          {
            component: AddProductComponent,
            path: 'add',
            canActivate: [AuthGuard],
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
export class UserRoutingModule {}
