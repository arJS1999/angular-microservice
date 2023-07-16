import { Component } from '@angular/core';
import {
  faUser,
  faUserPlus,
  faClipboardList,
  faDisplay,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class AdminSidebarComponent {
  faProduct = faDisplay;
  faUser = faUser;
  faUserPlus = faUserPlus;
  faClipboardList = faClipboardList;
}
