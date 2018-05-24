import { NgModule } from '@angular/core';
import { DTagComponent } from './d-tag/d-tag';
import { IonicModule } from 'ionic-angular/module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Ionic2RatingModule } from 'ionic2-rating/dist/ionic2-rating.module';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { HBarComponent } from './h-bar/h-bar';
import { VBarComponent } from './v-bar/v-bar';
import { RoundGraphComponent } from './round-graph/round-graph';

import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import more from 'highcharts/highcharts-more.src';
import exporting from 'highcharts/modules/exporting.src';
export function highchartsModules() {
  // apply Highcharts Modules to this array
  return [ more, exporting ];
}
 // important ##########################################
import solidgauge from 'highcharts/modules/solid-gauge';
import * as Highcharts from 'highcharts';
import { GaugeGraphComponent } from './gauge-graph/gauge-graph';
import { LineGraphComponent } from './line-graph/line-graph'; 
more(Highcharts);
solidgauge(Highcharts);
// important ##########################################


@NgModule({
	declarations: [DTagComponent,
    HBarComponent,
    VBarComponent,
    RoundGraphComponent,
    GaugeGraphComponent,
    LineGraphComponent],
	imports: [
		IonicModule,
		CommonModule,
		Ionic2RatingModule,
		ChartModule],
	exports: [DTagComponent,
    HBarComponent,
    VBarComponent,
    RoundGraphComponent,
    GaugeGraphComponent,
    LineGraphComponent],
	providers:[
		FileTransfer, FileTransferObject,
		File,FileOpener,AndroidPermissions,
		{ provide: HIGHCHARTS_MODULES, useFactory: highchartsModules }
	]
})
export class ComponentsModule {}
