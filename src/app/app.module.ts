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
import { FoldTwoComponent } from './components/fold-two/fold-two.component';

import { FoldThreeComponent } from './components/fold-three/fold-three.component';
import { FoldFourComponent } from './components/fold-four/fold-four.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { FoldFiveComponent } from './components/fold-five/fold-five.component';
import { FoldSixComponent } from './components/fold-six/fold-six.component';
import { FoldSevenComponent } from './components/fold-seven/fold-seven.component';
import { FoldEightComponent } from './components/fold-eight/fold-eight.component';
import { FoldNineComponent } from './components/fold-nine/fold-nine.component';
import { CardItemComponent } from './components/fold-seven/card-item/card-item.component';
import { TechIconComponent } from './components/fold-nine/tech-icon/tech-icon.component';
import { FooterComponent } from './components/footer/footer.component';
import { FoldTenComponent } from './components/fold-ten/fold-ten.component';

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
    FoldOneComponent,
    FoldTwoComponent,
    FoldThreeComponent,
    FoldFourComponent,
    VideoPlayerComponent,
    FoldFiveComponent,
    FoldSixComponent,
    FoldSevenComponent,
    FoldEightComponent,
    FoldNineComponent,
    CardItemComponent,
    TechIconComponent,
    FooterComponent,
    FoldTenComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
