import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { userRoutes } from './user.routes';
import { ProfileComponent } from "./profile.component";
import { LoginComponent } from './login.component';

@NgModule({
    imports: [
        // one key difference between feature module, or lazyloadable module vs. app.module,
        // is that we actually import BrowserModule in app.Module, but here we use CommonModule
        // another difference is for RouterModule, we use forChild here, not forRoot
        CommonModule, 
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations: [
        ProfileComponent,
        LoginComponent
    ],
    providers: [

    ]
})
export class UserModule {
    
}
