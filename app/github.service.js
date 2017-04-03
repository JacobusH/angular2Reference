"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/observable/forkJoin");
var GithubService = (function () {
    function GithubService(_http) {
        this._http = _http;
        this._user = "https://api.github.com/users/octocat";
        this._followers = "https://api.github.com/users/octocat/followers";
        this._baseUrl = "https://api.github.com/users/";
    }
    GithubService.prototype.getProfile = function (username) {
        return this._http.get(this._user)
            .map(function (res) { return res.json(); });
    };
    GithubService.prototype.getFollowers = function (username) {
        return this._http.get(this._followers)
            .map(function (res) { return res.json(); });
    };
    GithubService.prototype.getProfileAndFollowers = function (username) {
        return Observable_1.Observable.forkJoin(this._http.get(this._baseUrl + username)
            .map(function (res) { return res.json(); }), this._http.get(this._baseUrl + username + "/followers")
            .map(function (res) { return res.json(); }));
    };
    return GithubService;
}());
GithubService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GithubService);
exports.GithubService = GithubService;
//# sourceMappingURL=github.service.js.map