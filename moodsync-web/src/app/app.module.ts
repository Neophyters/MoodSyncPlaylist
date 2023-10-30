import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MoodInputComponent } from './mood-input/mood-input.component';
import { HttpClientModule } from '@angular/common/http'
import { SpotifyService } from './spotify-service/spotify.service';

@NgModule({
  declarations: [
    AppComponent,
    MoodInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
