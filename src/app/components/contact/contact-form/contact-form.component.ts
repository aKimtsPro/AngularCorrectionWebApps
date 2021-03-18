import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  form: FormGroup;

  constructor(builder: FormBuilder) {
    this.form = builder.group({
      'nom': new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
      'dest': new FormControl('proprio'),
      'message': new FormControl('', [Validators.required, Validators.maxLength(100)])
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.form);
    if ( this.form.valid ){
      this.msgList.push( this.form.value );
    }
    else{
      alert("le formulaire est invalide");
    }
  }

  toggleShow(){
    this.affich = !this.affich;
  }

}
