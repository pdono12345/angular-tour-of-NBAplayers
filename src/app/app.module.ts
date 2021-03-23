/*
  此檔案為 Module
  可以視為多個 JavaScript Modules 的打包
  此處為所有 component 管理的地方
*/
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
/*
  @開頭的稱為 decorator
  decorators 能夠附著 metadata 到 classes 或 properties
*/
@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
