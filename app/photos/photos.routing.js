"use strict";
var router_1 = require("@angular/router");
var photos_component_1 = require("./photos.component");
var photo_details_component_1 = require("./photo-details.component");
// import {MessagesComponenet} from './messages/messages.component';
// import {NotFoundComponenet} from './not-found.component';
var auth_guard_service_1 = require("../auth-guard.service");
exports.routingPhotos = router_1.RouterModule.forChild([
    {
        path: 'photos/:id',
        component: photo_details_component_1.PhotoDetailsComponent,
        canActivate: [auth_guard_service_1.AuthGuard]
    },
    {
        path: 'photos',
        component: photos_component_1.PhotosComponent
    }
]);
//# sourceMappingURL=photos.routing.js.map