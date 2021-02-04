import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../../public/shared/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate  {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean | UrlTree {
    if (this.authService.getUser() && this.authService.getUser().roles[0].role === 'ADMIN') {
      return true;
    } else {
      return this.router.parseUrl('/404');
    }

  }

}
