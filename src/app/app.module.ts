import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProvidersApiProvider } from '../providers/providers-api/providers-api';
import { ProvidersNetworkProvider } from '../providers/providers-network/providers-network';
import { ProvidersOfflineManagerProvider } from '../providers/providers-offline-manager/providers-offline-manager';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProvidersApiProvider,
    ProvidersNetworkProvider,
    ProvidersOfflineManagerProvider
  ]
})
export class AppModule {}
