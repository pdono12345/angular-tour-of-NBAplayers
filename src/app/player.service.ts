/**
 * 如果在最上層提供該服務時, Angular 會建立一個單一的、共享的實例，並將他注入到任何想要他的類別上
 * 在 @ Injectable meatadata 中註冊 provider 能允許 Angular 移除不需要的 service
 */
import { Injectable } from '@angular/core';
import { Player } from './player';
import { PLAYERS } from './mock-players';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

/**
 * 用 CLI 建立 service 會產生 @ Injectable decorator
 * 會將此 class 被標記在 DI 系統中
 */
@Injectable({
  /**
   * 必須註冊一個 provider 才能讓 service 在 DI系統中使用
   * 這邊是預設的 metadata providerIn: 'root'
   */
  providedIn: 'root'
})
export class PlayerService {

  constructor(
    /**
     * service 也可注入其他 service
     */
    private messageService: MessageService
  ) { }

  // getPlayers(): Player[] {
  //   return PLAYERS;
  // }
  /**
   * 上面為原來的方法, 若要從遠端接收資料就要把資料型態改用 Observable
   * 然後 return of(...)
   */
  getPlayers(): Observable<Player[]> {
    this.messageService.add('PlayerService: fetched players');
    return of(PLAYERS);
  }
  getPlayer(id: number): Observable<Player> {
    this.messageService.add(`PlayerService: fetch player id=${id}`);
    // list.find 類似於 C# linq 的 list.where
    return of(PLAYERS.find(p => p.id === id));
  }
}
