import { WebsocketService } from './websocket.service';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'

@Injectable({
	providedIn: 'root'
})
export class ChatService {

	messages: Subject<any>

	constructor(
		private wsService: WebsocketService
	) {
		this.messages = this.wsService.connect()
		// .map(res => res)
	}

	sendMessage(message: string) {
		this.messages.next(message)
	}

}
