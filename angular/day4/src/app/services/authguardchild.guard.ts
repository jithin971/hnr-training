import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardchildGuard implements CanActivateChild {
  constructor(private dataService: DataService) {

  }
  canActivateChild() {
    return this.dataService.isUserLogged?true: false;
  }
  
}
