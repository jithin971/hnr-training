import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { PurchaseComponent } from '../purchase/purchase.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivatecompGuard implements CanDeactivate<PurchaseComponent> {

  canDeactivate(component: PurchaseComponent) {
    return component.canDeactivate() || window.confirm("Do you wat to exit?..")
  }

}
