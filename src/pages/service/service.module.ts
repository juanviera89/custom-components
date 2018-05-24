import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServicePage } from './service';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ServicePage,
  ],
  imports: [
    IonicPageModule.forChild(ServicePage),
    ComponentsModule
  ],
})
export class ServicePageModule {}
