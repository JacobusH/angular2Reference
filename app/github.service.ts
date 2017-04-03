import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class GithubService
{
    private _user = "https://api.github.com/users/octocat";
    private _followers = "https://api.github.com/users/octocat/followers";
    private _baseUrl = "https://api.github.com/users/";

    constructor(private _http: Http)
    {

    }

    getProfile(username)
    {
        return this._http.get(this._user)
            .map(res => res.json());
    }

    getFollowers(username)
    {
         return this._http.get(this._followers)
            .map(res => res.json());
    }

    getProfileAndFollowers(username)
    {
        return Observable.forkJoin(
            this._http.get(this._baseUrl + username)
                .map(res => res.json()),
            this._http.get(this._baseUrl + username + "/followers")
                .map(res => res.json())
            );
    }
}





