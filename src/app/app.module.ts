import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient,HttpHeaders }from '@angular/common/http';
import { AppComponent } from './app.component';

import { ProfileComponent } from './components/profile/profile.component';
import { ProfileService } from './services/profile.service';
import { NavbarComponent } from './navbar/navbar.component';
import { DateCountPipe } from './date-count.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavbarComponent,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
