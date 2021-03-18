import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from 'src/app/model/pizza.model'
import { Plat } from 'src/app/model/plat.model';

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

  @Output('ajout-pizza')
  pizzaEmitter = new EventEmitter<Plat>();

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.menuPizza[0].constructor.name);

  }

  
  retour(){
    this.router.navigateByUrl('/menu');
  }

  onClick(pizza: Pizza){
    this.pizzaEmitter.emit( pizza );
  }

}
