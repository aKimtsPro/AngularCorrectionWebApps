import { Component, Input, OnInit } from '@angular/core';
import { Plat } from 'src/app/model/plat.model';

@Component({
  selector: 'app-cmd-item',
  templateUrl: './cmd-item.component.html',
  styleUrls: ['./cmd-item.component.css']
})
export class CmdItemComponent implements OnInit {

  @Input()
  cmd: Plat;

  constructor() { }

  ngOnInit(): void {
  }

}
