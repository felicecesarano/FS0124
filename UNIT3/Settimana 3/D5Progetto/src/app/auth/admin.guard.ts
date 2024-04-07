import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authSrv: AuthService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authSrv.user$.pipe(
        take(1),
        map((userData) => {
          if (userData && userData.user && userData.user.isAdmin) {
            return true;
          }
          setTimeout(() => {
            alert("Devi essere un amministratore per accedere a questa pagina");
          }, 600);
          return this.router.createUrlTree(['/home']);
        })
      );
  }

}
