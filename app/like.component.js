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
var LikeComponent = (function () {
    function LikeComponent() {
        this.likeCount = 0;
        this.isLiked = false;
    }
    LikeComponent.prototype.onClick = function () {
        if (!this.isLiked) {
            this.likeCount++;
        }
        else {
            this.likeCount--;
        }
        this.isLiked = !this.isLiked;
    };
    return LikeComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], LikeComponent.prototype, "likeCount", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], LikeComponent.prototype, "isLiked", void 0);
LikeComponent = __decorate([
    core_1.Component({
        selector: 'like',
        template: "\n        <i \n            class='glyphicon glyphicon-heart'\n            [style.color]=\"isLiked ? 'pink' : 'gray'\"\n            (click)=\"onClick()\">\n        </i>{{likeCount}}\n    "
    }),
    __metadata("design:paramtypes", [])
], LikeComponent);
exports.LikeComponent = LikeComponent;
//# sourceMappingURL=like.component.js.map