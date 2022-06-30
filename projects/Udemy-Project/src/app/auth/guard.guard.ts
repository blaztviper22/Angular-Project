import { Injectable } from '@angular/core';
import { 
  ActivatedRouteSnapshot, 
  CanActivate, 
  CanLoad, 
  Route, 
  Router, 
  RouterStateSnapshot, 
  UrlTree 
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../app.reducer';
import {take} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate, CanLoad {
  
  constructor(
    private authService: AuthService, 
    private router: Router, 
    private store: Store<fromRoot.State>
  ) { };


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean  {
      //  if (this.authService.isAuth()) {
      //    return true;
      //  } else {
      //    this.router.navigate(['/login']);
      //    return false;
      //  }
      console.log('guard')
      return this.store.select(fromRoot.getIsAuth).pipe(take(1))
  }
  
  canLoad(route: Route) {
      //  if (this.authService.isAuth()) {
      //    return true;
      //  } else {
      //    this.router.navigate(['/login']);
      //    return false;
      //  }
      return this.store.select(fromRoot.getIsAuth).pipe(take(1));
  }
}
