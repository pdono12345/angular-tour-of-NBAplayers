/*
  Input 能讓父層元件繫結 property
*/
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Player } from './../player';
import { PlayerService } from './../player.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})

export class PlayerDetailComponent implements OnInit {
  @Input() player: Player;

  constructor(
    // ActivatedRoute 會儲存導引到目前 component 的 route 資訊
    private route: ActivatedRoute,
    // location 提供跟瀏覽器互動的服務 ex.location.back回到上一頁
    private location: Location,
    private playerService: PlayerService,
  ) { }

  ngOnInit(): void {
    this.getPlayer();
  }

  getPlayer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.playerService.getPlayer(id)
      .subscribe(arg => this.player = arg);

  }
  goBack(): void {
    this.location.back();
  }

}
