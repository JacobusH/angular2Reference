import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component ({
    selector: 'like',
    template: `
        <i 
            class='glyphicon glyphicon-heart'
            [style.color]="isLiked ? 'pink' : 'gray'"
            (click)="onClick()">
        </i>{{likeCount}}
    `
})
export class LikeComponent {
    @Input() likeCount: number = 0;
    @Input() isLiked: boolean = false;

    onClick() 
    {
       if(!this.isLiked)
       {
           this.likeCount++;
       }
       else
       {
           this.likeCount--;
       }
        this.isLiked = !this.isLiked;
    }
}