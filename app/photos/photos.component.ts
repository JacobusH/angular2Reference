import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AuthService} from '../auth.service';

@Component ({
    template: `
       <h1>PHOTOS COMPONENT</h1>
    `
})
export class PhotosComponent {
    constructor(authService:AuthService)
    {
        authService.login("username", "password");
    }
}