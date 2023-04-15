import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DessertsComponent } from './menu/desserts/desserts.component';
import { MainsComponent } from './menu/mains/mains.component';
import { MenuComponent } from './menu/menu.component';
import { StartersComponent } from './menu/starters/starters.component';
import { ReservationComponent } from './reservation/reservation.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"menu", component: MenuComponent, children:[
    {path:"starters", component:StartersComponent},
    {path:"mains", component: MainsComponent},
    {path:"desserts", component: DessertsComponent}
  ]},
  {path:"login", component: LoginComponent},
  {path:"signup", component: SignupComponent},
  {path:"cart", component:CartComponent},
  {path:"reservation", component:ReservationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
