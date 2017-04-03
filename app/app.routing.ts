import { ModuleWithProviders } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import {PhotosComponent} from './photos/photos.component';
import {PhotoDetailsComponent} from './photos/photo-details.component';
import {OtherMessagesComponent} from './messages/messages.component';
// import {NotFoundComponenet} from './not-found.component';
import {PreventUnsavedChangesGuard} from './prevent-unsaved-changes-guard.service';

export const routing:ModuleWithProviders = RouterModule.forRoot([
    {path: '', component: HomeComponent},
    {
        path: 'messages', 
        component: OtherMessagesComponent,
    canDeactivate: [PreventUnsavedChangesGuard]}
    // {path: '**', component: NotFoundComponent},

]);
