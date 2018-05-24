import { ChartModule } from 'angular-highcharts';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConnectPage } from './connect';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ConnectPage,
  ],
  imports: [
    IonicPageModule.forChild(ConnectPage),
    ComponentsModule,

		ChartModule
  ],
})
export class ConnectPageModule {}
