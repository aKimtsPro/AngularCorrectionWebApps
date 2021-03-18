import { Component, OnInit } from '@angular/core';
import { BonjourService } from 'src/app/services/bonjour.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private helloService: BonjourService) { }

  ngOnInit(): void {
  }

  onClick(){
    this.helloService.sayHello();
  }

}
