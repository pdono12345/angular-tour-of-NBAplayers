import { Component, OnInit } from '@angular/core';
import { MessageService } from './../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(
    // 這邊使用 public 是為了讓 messageService 能在 tamplate 繫結
    public messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

}
