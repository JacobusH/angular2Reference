import {Component} from '@angular/core';
import {MessagesService} from './messages.service';
import {ImagesService} from './images.service';

@Component({
    selector: 'messages',
    template: `<h1>Messages</h1>
        <ul>
            <li *ngFor="let m of messages">{{m}}</li>
            <li *ngFor="let i of images"><img src="{{i}}" />{{i}}</li>
        </ul>
        <div (click)="onDivClick()">
        <button 
            class="btn btn-primary" [class.active]="isActive"
            [style.backgroundColor]="isActive ? 'blue' : 'gray'"
            (click)="onClick($event)">A Buttttt</button>
        </div>
        <input type="text" [(title)]="title" />
        Preview: {{title}}
    `
})
export class MessagesComponent {
    messages;
    images;
    isActive = true;

    constructor(messagesService: MessagesService, imagesService: ImagesService) {
        this.messages = messagesService.getMessages();
        this.images = imagesService.getImages();
    }

    onDivClick($event)
    {
        console.log("handled by div");
    }

    onClick($event)
    {
        $event.stopPropagation();
        console.log("click by button");
    }
}