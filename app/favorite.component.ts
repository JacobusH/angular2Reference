import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component ({
    selector: 'favorite',
    template: `
        <i 
            class=glyphicon
            [ngClass]="{
                'glyphicon-star-empty': !isFavorite,
                'glyphicon-star': isFavorite
            }"
            (click)="onClick()">
        </i>
    `
})
export class FavoriteComponent {
    @Input() isFavorite = false;

    @Output() change = new EventEmitter();

    onClick() 
    {
        this.isFavorite = !this.isFavorite;
        this.change.emit({newValue: this.isFavorite});
    }
}