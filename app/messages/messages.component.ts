import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AuthService} from '../auth.service';
import {FormComponent} from '../prevent-unsaved-changes-guard.service';
import {MessagesService} from '../messages.service';
import {FormGroup} from '@angular/forms';

@Component ({
    template: `
       <h1>MESSAGES COMPONENT</h1>
       <input [(ngModel)]="title" />
       <ul>
            <li *ngFor="let m of messages">{{m}}</li>
       </ul>
    `
})
export class OtherMessagesComponent {
    messages;
    title = "New Message";
    form: FormGroup;
    
    constructor(messagesService: MessagesService)
    {
        this.messages = messagesService.getMessages();
    }



}