import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {MessagesComponent} from './messages.component';
import {OtherMessagesComponent} from './messages/messages.component';
import {MessagesService} from './messages.service';
import {ImagesService} from './images.service';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth-guard.service';
import {PreventUnsavedChangesGuard} from './prevent-unsaved-changes-guard.service';
import {FavoriteComponent} from './favorite.component';
import {LikeComponent} from './like.component';
import {VoterComponent} from './voter.component';
import {SummaryPipe} from './summary.pipe';
import {ZippyComponent} from './zippy.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ContactFormComponent} from './contact-form.component';
import {SignUpFormComponent} from './subscription-form.component';
import {HttpModule, JsonpModule} from '@angular/http';
import {GithubUserPageComponent} from './github-user-page.component';

// import {MessagesModule} from './messages/messsages.module';
// import {PhotosModule} from './photos/photos.module';
import {routingPhotos} from './photos/photos.routing';
import {routing} from './app.routing';
import {PhotoDetailsComponent} from './photos/photo-details.component';
import {HomeComponent} from './home.component';
import {PhotosComponent} from './photos/photos.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, JsonpModule, routingPhotos, routing ],
  declarations: [ AppComponent, MessagesComponent, OtherMessagesComponent, FavoriteComponent, LikeComponent, VoterComponent, SummaryPipe, 
                  ZippyComponent, ContactFormComponent, SignUpFormComponent, GithubUserPageComponent, PhotoDetailsComponent, HomeComponent, PhotosComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MessagesService,  ImagesService, AuthService, AuthGuard, PreventUnsavedChangesGuard]
})

export class AppModule { }
