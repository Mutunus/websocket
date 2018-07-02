import { Observable } from 'rxjs';
import { ChatService } from './services/chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	public messages: string[]

	constructor(
	private chatService: ChatService
	) {
		this.messages = []
	}

	ngOnInit() {
		this.chatService.messages.subscribe(message => this.messages.push(message))
	}

	sendMessage(message: string) {
		this.chatService.sendMessage(message)
	}

}
