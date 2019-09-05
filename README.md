Social login api for Angular 8. Includes Facebook and Google login.  

[AOT](https://angular.io/guide/aot-compiler) Compatible.


## Getting started


### Install via npm 

```sh
npm install --save ng-social
```

### Import the module

In `app.module.ts`,

```

import { 
	NgSocialModule, 
	AuthServiceConfig, 
	GoogleLoginProvider, 
	FacebookLoginProvider 
} from 'ng-social'; 


// Configs

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
  imports: [
    ...
    NgSocialModule

  ],
  providers: [
    ...
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [...]
})



export class AppModule { }

```

### Usage : 

In `app.component.ts`,

```typescript

import {Component, OnInit} from '@angular/core';
import {
    SocialAuthService,
    FacebookLoginProvider,
    GoogleLoginProvider
} from 'ng-social';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

   constructor(private socialAuthService: SocialAuthService) {}
  
  public socialLogin(platform: string) {
    let socialPlatformProvider;

    if(platform == "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if(platform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then((userData) => {
      console.log(platform + " login in data : " , userData);
    });

  }
  
}
```



In `app.component.html`,

```html
<h1>
     Log in
</h1>

<button (click)="socialLogin('facebook')">Log in with Facebook</button>
<button (click)="socialLogin('google')">Log in with Google</button>           
```




### Facebook App Id : 

You need to create your own app by going to [Facebook Developers](https://developers.facebook.com/) page.
Add `Facebook login` under products and configure `Valid OAuth redirect URIs`.

### Google Client Id : 

Follow this official documentation on how to [
Create a Google API Console project and client ID](https://developers.google.com/identity/sign-in/web/devconsole-project).

