"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var messages_component_1 = require("./messages/messages.component");
// import {NotFoundComponenet} from './not-found.component';
var prevent_unsaved_changes_guard_service_1 = require("./prevent-unsaved-changes-guard.service");
exports.routing = router_1.RouterModule.forRoot([
    { path: '', component: home_component_1.HomeComponent },
    {
        path: 'messages',
        component: messages_component_1.OtherMessagesComponent,
        canDeactivate: [prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard]
    }
]);
//# sourceMappingURL=app.routing.js.map