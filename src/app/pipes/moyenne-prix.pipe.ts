import { Pipe, PipeTransform } from '@angular/core';
import { Plat } from '../model/plat.model';

@Pipe({
  name: 'moyennePrix'
})
export class MoyennePrixPipe implements PipeTransform {

  transform(value: Plat[]): number {
    let sum = 0;
    value.forEach( plat => sum += plat.prix );
    return sum / value.length;
  }

}
