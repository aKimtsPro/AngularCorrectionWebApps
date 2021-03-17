import { Component, OnInit } from '@angular/core';
import { Message } from './message.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  message: Message = {
    nom: '',
    dest: 'proprio',
    message: ''
  }
  msgList: Message[] = [];

  affich: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){

    const toAdd: Message = {
      nom: this.message.nom,
      dest: this.message.dest,
      message: this.message.message
    };

    this.msgList.push( toAdd );
    this.msgList.forEach((message) => console.log(message.message));

  }

  toggleShow(){
    this.affich = !this.affich;
  }

}
