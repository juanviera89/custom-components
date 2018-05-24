import { DTagComponent } from './../components/d-tag/d-tag';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GeneralProvider } from '../providers/general/general';
import { CommunicationsProvider } from '../providers/communications/communications';
import { MemoryProvider } from '../providers/memory/memory';

import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
/* import { ScreenOrientation } from '@ionic-native/screen-orientation'; */

import { Ionic2RatingModule } from 'ionic2-rating'; 
import { ComponentsModule } from '../components/components.module';

import {File} from '@ionic-native/File'
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { FileOpener } from '@ionic-native/file-opener';
import { AndroidPermissions } from '@ionic-native/android-permissions';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import more from 'highcharts/highcharts-more.src';
import exporting from 'highcharts/modules/exporting.src';
export function highchartsModules() {
  // apply Highcharts Modules to this array
  return [ more, exporting ];
}
 // important ##########################################
import solidgauge from 'highcharts/modules/solid-gauge';
import * as Highcharts from 'highcharts';
more(Highcharts);
solidgauge(Highcharts);
// important ########################################## */

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    Ionic2RatingModule,
    ComponentsModule,
		/* ChartModule */
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
    GeneralProvider,
    CommunicationsProvider,
    MemoryProvider,
    File,
    FileTransfer, FileTransferObject,FileOpener,
    AndroidPermissions,
    /* { provide: HIGHCHARTS_MODULES, useFactory: highchartsModules } */
    /* ScreenOrientation */
  ]
})
export class AppModule {}
