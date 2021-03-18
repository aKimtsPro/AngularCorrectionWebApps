import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ContactComponent } from './components/contact/contact.component';
import { MenuComponent } from './components/menu/menu.component';
import { PateComponent } from './components/menu/pate/pate.component';
import { PizzaComponent } from './components/menu/pizza/pizza.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './components/contact/contact-form/contact-form.component';
import { NavComponent } from './components/nav/nav.component';
import { Page404Component } from './components/page404/page404.component';
import { FormatPlatPipe } from './pipes/format-plat.pipe';
import { MoyennePrixPipe } from './pipes/moyenne-prix.pipe';
import { CommandeComponent } from './components/menu/commande/commande.component';
import { CmdItemComponent } from './components/menu/commande/cmd-item/cmd-item.component';
import { HttpComponent } from './components/http/http.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    ContactComponent,
    MenuComponent,
    PateComponent,
    PizzaComponent,
    ContactFormComponent,
    NavComponent,
    Page404Component,
    FormatPlatPipe,
    MoyennePrixPipe,
    CommandeComponent,
    CmdItemComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
