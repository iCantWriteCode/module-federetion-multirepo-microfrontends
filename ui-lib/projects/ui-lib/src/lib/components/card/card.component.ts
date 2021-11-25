import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-lib-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input('text') text!: string

  constructor() { }

  ngOnInit(): void {
  }

}
