import { Injectable } from '@angular/core';
import { DefaultUrlSerializer, UrlSerializer, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StandardUrlSerializerService extends DefaultUrlSerializer implements UrlSerializer {
  serialize(tree: UrlTree): string {
    const urlCollection = super.serialize(tree).split('/');
    return urlCollection[0] + '/' + urlCollection[1];
  }
}
