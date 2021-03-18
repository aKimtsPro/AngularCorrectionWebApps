import { Component, Input, OnInit } from '@angular/core';
import { Plat } from 'src/app/model/plat.model';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  @Input("commandes")
  cmdList: Plat[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
