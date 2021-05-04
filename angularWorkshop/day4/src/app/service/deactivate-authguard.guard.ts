import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { ParentComponent } from '../component/parent/parent.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateAuthguardGuard implements CanDeactivate<ParentComponent> {
  canDeactivate(component:ParentComponent) {
    return component.canDeactivate() || window.confirm("Are you sure?");
  }
  
}
