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
var core_1 = require("angular2/core");
var http_1 = require("angular2/http");
var photo_service_1 = require("./photo.service");
var AlbumComponent = (function () {
    function AlbumComponent(_photoService) {
        this._photoService = _photoService;
        this.isLoading = true;
    }
    AlbumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._photoService.getPhotos(1)
            .subscribe(function (photos) {
            _this.isLoading = false;
            _this.photos = photos;
        });
    };
    return AlbumComponent;
}());
AlbumComponent = __decorate([
    core_1.Component({
        template: "\n        <h1>Album</h1>\n        <div *ngIf=\"isLoading\">\n            <i class=\"fa fa-spinner fa-spin fa-3x\"></i>\n        </div>\n        <div>\n            <img *ngFor=\"#photo of photos\" src=\"{{ photo.thumbnailUrl }}\">\n        </div>\n    ",
        providers: [photo_service_1.PhotoService, http_1.HTTP_PROVIDERS]
    }),
    __metadata("design:paramtypes", [photo_service_1.PhotoService])
], AlbumComponent);
exports.AlbumComponent = AlbumComponent;
//# sourceMappingURL=album.component.js.map