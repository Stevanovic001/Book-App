import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { LoginComponent } from "./auth/login/login.component";
import { CartComponent } from "./cart/cart.component";
import { AppComponent } from "./app.component";

const rute: Routes = [
    { path: '', component: HomeComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'login', component: LoginComponent},
    { path: 'header', component: AppComponent},
    { path: 'cart', component:CartComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(rute)
    ],
    exports: [
        RouterModule
    ]
})

export class RoutingModule {}