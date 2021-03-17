import { Pipe, PipeTransform } from '@angular/core';
import { Plat } from 'src/app/model/plat.model';

@Pipe({
  name: 'plat'
})
export class PlatPipe implements PipeTransform {

  transform(value: Plat): string {
    return value.nom+' - '+ value.prix +'€';
  }

}
