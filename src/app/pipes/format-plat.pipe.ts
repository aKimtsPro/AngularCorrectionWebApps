import { Pipe, PipeTransform } from '@angular/core';
import { Plat } from 'src/app/model/plat.model';

@Pipe({
  name: 'formatPlat'
})
export class FormatPlatPipe implements PipeTransform {

  transform(value: Plat, symbole: string ): string {
    return value.nom +" - "+ value.prix + ( symbole === undefined ? '$' : symbole );
  }

}
