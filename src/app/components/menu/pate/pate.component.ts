import { Route } from '@angular/compiler/src/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Plat } from 'src/app/model/plat.model';

@Component({
  selector: 'app-pate',
  templateUrl: './pate.component.html',
  styleUrls: ['./pate.component.css']
})
export class PateComponent implements OnInit {

  menuPate = [
    {
      nom: 'pâte au pesto',
      prix: 8
    },
    {
      nom: 'pâte carbo',
      prix: 12
    },
    {
      nom: 'pâte al arabiata',
      prix: 10
    },
    {
      nom: 'pâte bolo',
      prix: 5
    },
    {
      nom: 'pâte au beurre',
      prix: 2
    },
    {
      nom: 'pâte au ketchup',
      prix: 24
    }
  ]

  @Output('ajout-pate')
  pateEmitter = new EventEmitter<Plat>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  retour(){
    this.router.navigateByUrl('/menu');
  }

  onClick(pate: Plat){
    this.pateEmitter.emit( pate );
  }
}
