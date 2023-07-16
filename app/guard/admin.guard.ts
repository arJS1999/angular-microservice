import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HelperService } from '../service/Helper/helper';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private route: Router, private helperService: HelperService) {}

  canActivate() {
    if (this.helperService.haveAccessAdmin()) {
      return true;
    } else {
      this.route.navigate(['']);
      return false;
    }
  }
}
