import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/model/pizza.model'

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  menuPizza: Pizza[] = [
    {
      nom: 'Pizza 4 saisons',
      prix: 15
    },
    {
      nom: 'Pizza Hawaii',
      prix: 10
    },
    {
      nom: 'Pizza spéciale',
      prix: 12
    },
    {
      nom: 'Pizza végétarienne',
      prix: 8
    },
    {
      nom: 'Pizza 4 fromages',
      prix: 18
    }
  ] 

  constructor() { }

  ngOnInit(): void {
    console.log(this.menuPizza[0].constructor.name);

  }

}
