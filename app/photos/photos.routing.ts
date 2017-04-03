import { ModuleWithProviders } from '@angular/core';
import {Router, RouterModule} from '@angular/router';

import {PhotosComponent} from './photos.component';
import {PhotoDetailsComponent} from './photo-details.component';
// import {MessagesComponenet} from './messages/messages.component';
// import {NotFoundComponenet} from './not-found.component';

import {AuthGuard} from '../auth-guard.service';

export const routingPhotos:ModuleWithProviders = RouterModule.forChild([
    {
        path: 'photos/:id', 
        component: PhotoDetailsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'photos', 
        component: PhotosComponent
    }

]);
