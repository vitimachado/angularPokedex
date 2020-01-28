import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate {
  
  constructor(private router: Router) {}

/*
  canActivate(
     next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> | boolean {
        return new Promise(resolve => {

          if(this.crudService.loggedIn) {
            return true;
          }
          else {
            //this.router.navigate(['/login']);
            return true;
          }
      }
        )
    }; */
   canActivate():boolean {
     console.log('localStorage.getItem',!!localStorage.getItem('to'));
     
    if(!!localStorage.getItem('to')) {
      return true;
    }
    else {
      this.router.navigate(['/login']);
      return false;
    }
  } 
}
