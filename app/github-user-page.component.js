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
var core_1 = require("@angular/core");
var github_service_1 = require("./github.service");
var GithubUserPageComponent = (function () {
    function GithubUserPageComponent(_githubService) {
        this._githubService = _githubService;
        this.isLoading = true;
        this.username = "octocat";
        this.user = {};
        this.followers = [];
    }
    GithubUserPageComponent.prototype.ngOnInit = function () {
        // this._githubService.getProfile()
        //     .subscribe(profile => {
        //         console.log(profile);
        //     })
        var _this = this;
        // this._githubService.getFollowers()
        //     .subscribe(followers => {
        //         console.log(followers)
        //     })
        this._githubService.getProfileAndFollowers(this.username)
            .subscribe(function (profileAndFollowers) {
            _this.user = profileAndFollowers[0];
            _this.followers = profileAndFollowers[1];
        }, null, function () { _this.isLoading = false; });
    };
    return GithubUserPageComponent;
}());
GithubUserPageComponent = __decorate([
    core_1.Component({
        selector: 'githubUserPage',
        template: "\n        <div *ngIf=\"isLoading\"><i class=\"fa fa-spinner fa-spin fa-3x\"></i></div>\n        <h2>@{{user.login}}</h2>\n        <img class=\"avatar\" src=\"{{user.avatar_url}}\" >\n\n        <h3>Followers</h3>\n        <div *ngFor=\"let follower of followers\" class=\"media\">\n            <div class=\"media-left\">\n                <a  href=\"#\">\n                <img class=\"media-object avatar\" src=\"{{follower.avatar_url}}\" >\n                </a>\n            </div>\n            <div class=\"media-body\">\n                <h4 class=\"media-heading\">{{follower.login}}</h4>\n            </div>\n        </div>\n        <br/>\n    ",
        styles: ["\n        .avatar\n        {\n            height:30px; \n            width:30px;\n        }\n    "],
        providers: [github_service_1.GithubService]
    }),
    __metadata("design:paramtypes", [github_service_1.GithubService])
], GithubUserPageComponent);
exports.GithubUserPageComponent = GithubUserPageComponent;
//# sourceMappingURL=github-user-page.component.js.map