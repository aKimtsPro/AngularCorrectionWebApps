import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ContactComponent } from './components/contact/contact.component';
import { HttpComponent } from './components/http/http.component';
import { MenuComponent } from './components/menu/menu.component';
import { PateComponent } from './components/menu/pate/pate.component';
import { PizzaComponent } from './components/menu/pizza/pizza.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  { path:'', redirectTo:'accueil', pathMatch:'full' },
  { path:'accueil', component: AccueilComponent },
  { path:'menu', component: MenuComponent },
  { path:'menu/pate', component: PateComponent },
  { path:'menu/pizza', component: PizzaComponent },
  { path:'contact', component: ContactComponent },
  { path:'http', component: HttpComponent },
  { path:'**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
