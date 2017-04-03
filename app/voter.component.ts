import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component ({
    selector: 'voter',
    template: `
        <div style="width:20px;">
            <i 
                class='glyphicon glyphicon-menu-up'
                [style.color]="voteState == 1 ? 'yellow' : 'gray'"
                (click)="changeVoteState('upVote')">
            </i>
            {{voteCount}}
            <i 
                class='glyphicon glyphicon-menu-down'
                [style.color]="voteState == -1 ? 'yellow' : 'gray'"
                (click)="changeVoteState('downVote')">
            </i>
        </div>
    `
})
export class VoterComponent {
    @Input() voteCount: number = 0;
    @Input() voteState: number = 0; //-1, 0, 1

    changeVoteState(voteResult: string )
    {
       if(voteResult == "upVote" && this.voteState != 1)
       {
           this.voteState = 1;
           this.voteCount++;
       }
       else if(voteResult == "downVote" && this.voteState != -1)
       {
           this.voteState = -1;
           this.voteCount--;
       }
       else
       {
           this.voteState = 0
       }
    }
}