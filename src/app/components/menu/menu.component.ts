import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plat } from 'src/app/model/plat.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  cmdList: Plat[]=[{
    nom: 'moussaka',
    prix: 15
  }];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  versPate(){
    this.router.navigateByUrl('/menu/pate');
  }

  versPizza(){
    this.router.navigateByUrl('/menu/pizza');
  }

  onAjout(plat: Plat){
    this.cmdList.push( plat );
  }

}
