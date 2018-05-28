import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSocialModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'ng-social'; 

import { AppComponent } from './app.component';

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("1758555154405794")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("1074764438873-k221gusckcgqaalhqnsqn891kjoigcas.apps.googleusercontent.com")
        },
      ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgSocialModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
