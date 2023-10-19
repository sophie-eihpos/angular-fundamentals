import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // cannot put it before BrowerModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateSessionComponent,
  CreateEventComponent,
  SessionListComponent,
  EventRouteActivator,
  EventListResolver,
  DurationPipe,
  UpVoteComponent,
  VoterService
} from './events/index';

import { CollapsibleWellComponent, JQUERY_TOKEN, SimpleModalComponent, ModalTriggerDirective } from './common/index';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

let jQuery = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, ToastrModule.forRoot(), // for angular 16 to use toastr,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateSessionComponent,
    SessionListComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    CollapsibleWellComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
    DurationPipe,
    UpVoteComponent
  ],
  providers: [    
    { provide: JQUERY_TOKEN, useValue: jQuery },
    AuthService,
    EventService, 
    EventRouteActivator,
    EventListResolver,
    VoterService,

    // after use modified the form then click on cancel button, 
    // this prevents the user from canceling before saving it.
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
  ],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');;
  }
  
  return true;
}
