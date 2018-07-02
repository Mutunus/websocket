import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.css']
})
export class ChatMessagesComponent implements OnInit {

  public chatMessages
  private socket

  constructor() { }

  ngOnInit() {
    
  }

}
