import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SetupComponent } from './components/setup/setup.component';
import { DisplayComponent } from './components/display/display.component';
import { KeysComponent } from './components/keys/keys.component';
import {AppService} from './services/app.service';
import { PasswordComponent } from './components/password/password.component';


@NgModule({
  declarations: [
    AppComponent,
    SetupComponent,
    DisplayComponent,
    KeysComponent,
    PasswordComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
