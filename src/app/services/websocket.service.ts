import { Injectable } from '@angular/core';
import * as io from 'socket.io-client'
import { environment } from './../../environments/environment'
import { Observable } from 'rxjs'
import * as Rx from 'rxjs'

@Injectable({
	providedIn: 'root'
})
export class WebsocketService {

	private socket

	constructor() { }

	connect() {
		this.socket = io(environment.socketUrl)
		let observable = new Observable(observer => {
			this.socket.on('chatMessage', message => {
				console.log(message)
				observer.next(message)
			})
		})
		let observer = {
			next: message => this.socket.emit('chatMessage', message)
		}
		return Rx.Subject.create(observer, observable)
	}
}
