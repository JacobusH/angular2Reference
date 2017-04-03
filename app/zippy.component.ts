import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'zippy',
    template: `
        <div class="zippy">
            <div 
                class="zippy-title" 
                (click)="toggle()"
            >
                {{title}}
                <i class="glyphicon pull-right"
                    [ngClass]="{
                        'glyphicon-chevron-up': !isExpanded,
                        'glyphicon-chevron-down': isExpanded
                    }"
                >
                </i> 
            </div>
            <div *ngIf="isExpanded" class="zippy-content">
                <ng-content></ng-content>
            </div>
        </div>
    `
})
export class ZippyComponent {
    @Input() title: string;
    isExpanded = false;

    toggle()
    {
        this.isExpanded = !this.isExpanded;
    }
}