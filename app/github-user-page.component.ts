import {Component, OnInit} from '@angular/core';
import {GithubService} from './github.service';

@Component({
    selector: 'githubUserPage',
    template: `
        <div *ngIf="isLoading"><i class="fa fa-spinner fa-spin fa-3x"></i></div>
        <h2>@{{user.login}}</h2>
        <img class="avatar" src="{{user.avatar_url}}" >

        <h3>Followers</h3>
        <div *ngFor="let follower of followers" class="media">
            <div class="media-left">
                <a  href="#">
                <img class="media-object avatar" src="{{follower.avatar_url}}" >
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">{{follower.login}}</h4>
            </div>
        </div>
        <br/>
    `,
    styles: [`
        .avatar
        {
            height:30px; 
            width:30px;
        }
    `],
    providers: [GithubService]
})
export class GithubUserPageComponent implements OnInit
{
    isLoading = true;
    username = "octocat";
    user = {};
    followers = [];

    constructor(private _githubService: GithubService)
    {

    }

    ngOnInit()
    {
        // this._githubService.getProfile()
        //     .subscribe(profile => {
        //         console.log(profile);
        //     })

        // this._githubService.getFollowers()
        //     .subscribe(followers => {
        //         console.log(followers)
        //     })
        this._githubService.getProfileAndFollowers(this.username)
            .subscribe(profileAndFollowers => {
                this.user = profileAndFollowers[0];
                this.followers = profileAndFollowers[1];
            }, 
            null, 
            () => {this.isLoading = false;})
    }
}