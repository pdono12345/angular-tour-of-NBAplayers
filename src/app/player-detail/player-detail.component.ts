/*
  Input 能讓父層元件繫結 property
*/
import { Component, OnInit, Input } from '@angular/core';
import { Player } from './../player';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})

export class PlayerDetailComponent implements OnInit {
  @Input() player: Player;

  constructor() { }

  ngOnInit(): void {
  }

}
