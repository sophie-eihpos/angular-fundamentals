import { Routes } from "@angular/router";

import {
    EventDetailsComponent,
    EventsListComponent,
    CreateEventComponent,
    EventListResolver,
    CreateSessionComponent,
    EventResolver
} from './events/index';

import { Error404Component } from "./errors/404.component";

export const appRoutes: Routes = [
    { 
        path: 'events/new', 
        component: CreateEventComponent,
        canDeactivate: ['canDeactivateCreateEvent'] // use a function
    }, // this has to be the first route
    { 
        path: 'events', 
        component: EventsListComponent,
        resolve:  { events: EventListResolver }
    },
    { 
        path: 'events/:id', 
        component: EventDetailsComponent,
        resolve: { event: EventResolver }

        // commented this out because we are use resolver instead of activate guard
        // canActivate: mapToCanActivate([EventRouteActivator]) // use a service
    },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: 'events', pathMatch: 'full' },

    // when the route starts with 'user', then load UserModule from the path of './user/user.module'
    { 
        path: 'user', 
        loadChildren: () => import('./user/user.module').then(mod => mod.UserModule),
        // loadChildren: './user/user.module#UserModule' deprecated in angular 8
    }
];
