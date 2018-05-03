import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SetupComponent } from './components/setup/setup.component';
import { DisplayComponent } from './components/display/display.component';
import { KeysComponent } from './components/keys/keys.component';
import {AppService} from './services/app.service';
import { PasswordComponent } from './components/password/password.component';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };


@NgModule({
  declarations: [
    AppComponent,
    SetupComponent,
    DisplayComponent,
    KeysComponent,
    PasswordComponent
  ],
  imports: [
    BrowserModule,
      SocketIoModule.forRoot(config)
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
