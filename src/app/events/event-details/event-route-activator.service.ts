// // deleting this file because we are going to create a resolver instead of guard

// import { Injectable } from "@angular/core";
// import { ActivatedRouteSnapshot, Router } from "@angular/router";
// import { EventService } from "../shared/event.service";

// @Injectable()
// export class EventRouteActivator {
//     constructor (private eventService: EventService,
//         private router: Router) {
        
//     }

//     // cannot implements CanActivate interface because it is deprecated.
//     // https://stackoverflow.com/questions/75564717/angulars-canactivate-interface-is-deprecated-how-to-replace-it
//     canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot) {

//         // cast id value to a number by adding +
//         const eventExists = !!this.eventService.getEvent(+activatedRouteSnapshot.params['id']);

//         if(!eventExists) {
//             this.router.navigate(['/404']);
//         }

//         return eventExists;
//     }
// }
