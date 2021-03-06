import { Component, OnInit } from '@angular/core';
import { AuthLibService } from 'auth-lib'

@Component({
  selector: 'homepage-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(public authService: AuthLibService) { }

  ngOnInit(): void { }

  buttonClickedEvent(data: any) {
    console.log('Data: ', data);

  }

}
