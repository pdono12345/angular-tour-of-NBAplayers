import { Component, OnInit } from '@angular/core';
import { Players } from './../players';



@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  constructor() { }
  player: Players = {
    id: 1,
    name: 'Michael Jordan'
  };

  ngOnInit(): void {
  }

}
