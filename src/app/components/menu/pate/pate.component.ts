import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pate',
  templateUrl: './pate.component.html',
  styleUrls: ['./pate.component.css']
})
export class PateComponent implements OnInit {

  menuPate = [
    'pâte au pesto',
    'pâte carbo',
    'pâte al arabiata',
    'pâte bolo',
    'pâte au beurre',
    'pâte au ketchup'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
