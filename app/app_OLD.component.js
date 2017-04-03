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
var post_service_1 = require("./post.service");
var AppComponent = (function () {
    function AppComponent(_postService) {
        this._postService = _postService;
        this.isLoading = true;
        this.likes = {
            likeCount: 109,
            isLiked: false
        };
        this.votes = {
            voteCount: 99
        };
        this.post = {
            title: "Title",
            isFavorite: true,
            body: "\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget lorem nec urna convallis finibus. Cras eget nulla odio. Duis porttitor nulla sit amet augue lacinia, eget convallis dui convallis. In ac nisi leo. Donec vitae odio nunc. Curabitur tempor, arcu ut placerat laoreet, mi leo dictum justo, sed consequat tortor mi convallis magna. Suspendisse sed suscipit ante, at faucibus felis. Donec vulputate lorem sed quam dignissim sollicitudin vitae ut metus. Nunc sagittis rutrum ultrices. Curabitur sit amet mollis eros. Sed dapibus metus et purus vehicula posuere. Proin efficitur sit amet felis iaculis auctor. Duis fringilla sem eget sem molestie consectetur.\n    "
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        //  this._postService.getPosts()
        //   .subscribe(posts => {
        //     this.isLoading = false;
        //     console.log(posts)});
    };
    AppComponent.prototype.onFavoriteChange = function ($event) {
        console.log($event);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n      <githubUserPage></githubUserPage>\n      <favorite [isFavorite]=\"post.isFavorite\" (change)=\"onFavoriteChange($event)\"></favorite>\n      <like [likeCount]=\"likes.likeCount\" [isLiked]=\"likes.isLiked\"></like>\n      <div>\n        {{post.body | summary:100}}\n      </div>\n      <zippy title=\"Zipyyyyyyy\">\n      Yes this is zipppedpepd \n      </zippy>\n      <voter [voteCount]=\"votes.voteCount\"></voter>\n      <div *ngIf=\"isLoading\"><i class=\"fa fa-spinner fa-spin fa-3x\"></i></div>\n      <messages></messages>\n      <zippy title=\"Title of Zippy 1\">\n        Content of Zippy 1\n      </zippy>\n      <zippy title=\"Title of Zippy 2\">\n        Content of Zippy 2\n      </zippy>\n     <br/>\n     <contact-form></contact-form>\n     <signup-form></signup-form>\n     \n    ",
        providers: [post_service_1.PostService]
    }),
    __metadata("design:paramtypes", [post_service_1.PostService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app_OLD.component.js.map