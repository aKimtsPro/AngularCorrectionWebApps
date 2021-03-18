import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BonjourService {

  constructor() { }

  sayHello(){
    alert("bonjour");
  }
}
