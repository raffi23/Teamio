import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { NavbarItemComponent } from './components/navbar-item/navbar-item.component';
import { LogoComponent } from './components/logo/logo.component';
import { ThumbCardComponent } from './components/thumb-card/thumb-card.component';
import { NavbarExtrasComponent } from './components/navbar-extras/navbar-extras.component';
import { HomeLandingComponent } from './pages/home-landing/home-landing.component';
import { FoldOneComponent } from './components/fold-one/fold-one.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ButtonComponent,
    NavbarItemComponent,
    LogoComponent,
    ThumbCardComponent,
    NavbarExtrasComponent,
    HomeLandingComponent,
    FoldOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
