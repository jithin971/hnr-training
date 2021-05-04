import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ChildAuthguardGuard implements CanActivateChild {

  constructor(private dataService: DataService){

  }
  canActivateChild() {
      if (this.dataService.child) {
        return true;
      }
      return false
    }
  }
