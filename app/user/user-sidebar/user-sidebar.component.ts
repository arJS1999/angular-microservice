import { Component } from '@angular/core';
import {
  faCartPlus,
  faDisplay,
  faMoneyCheckDollar,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css'],
})
export class UserSidebarComponent {
  faProduct = faDisplay;
  faCart = faCartPlus;
  faOrder = faMoneyCheckDollar;
}
