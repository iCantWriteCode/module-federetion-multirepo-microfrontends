import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ui-lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input('text') text!: string
  @Input('radius') radius!: number

  @Output('buttonClicked') buttonClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  buttonClick(value: string) {
    console.log('buttonClick');

    this.buttonClicked.emit('Button Clicked');
  }

}
