import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  versPate(){
    this.router.navigateByUrl('/menu/pate');
  }

  versPizza(){
    this.router.navigateByUrl('/menu/pizza');
  }

}
