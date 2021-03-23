import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from './../player.service';
import { MessageService } from './../message.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  constructor(
    // 在建構子中使用 DI 注入
    private playerService: PlayerService,
    private messageService: MessageService,
  ) { }

  players: Player[];
  selectedPlayer: Player;

  // getPlayers(): void {
  //   this.players = this.playerService.getPlayers();
  // }
  /**
   * 上面是原來的版本, 從 service 同步資料過來
   * 而如果向遠端發起請求時, 要等待 service 的 observable 傳陣列過來, 再用 subscribe 方法把這個陣列傳給函式 -> 非同步
   *
   * Observable<Player[]> 有點類似於 .net core 的 Task<Player[]>
   * subscribe 有點類似於 .net core 的 await
   */
  getPlayers(): void {
    this.playerService.getPlayers()
      .subscribe(dataFromService => this.players = dataFromService);
  }

  onSelect(player: Player): void {
    this.selectedPlayer = player;
    // 如果字串內要傳入變數, 則要用反引號包 `...${variable.property}`, 純字串使用普通引號 'string string string'
    this.messageService.add(`PlayersComponent: Selected player id=${player.id}`)
  }

  ngOnInit(): void {
    this.getPlayers();
  }

}
