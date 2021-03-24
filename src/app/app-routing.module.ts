import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';


const routes: Routes = [
  // path: 用來匹配瀏覽器的URL字串
  // component: 導航到該路由時, 路由器應該建立的元件
  { path: 'players', component: PlayersComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // path中的 (:) 表示為佔位符, 可帶入變數
  { path: 'detail/:id', component: PlayerDetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
