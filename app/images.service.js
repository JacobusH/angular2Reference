"use strict";
var ImagesService = (function () {
    function ImagesService() {
    }
    ImagesService.prototype.getImages = function () {
        return ["http://placekitten.com/100/100", "http://placekitten.com/200/100", "http://placekitten.com/100/300"];
    };
    return ImagesService;
}());
exports.ImagesService = ImagesService;
//# sourceMappingURL=images.service.js.map