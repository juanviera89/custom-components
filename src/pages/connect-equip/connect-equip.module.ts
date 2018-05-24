import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConnectEquipPage } from './connect-equip';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ConnectEquipPage,
  ],
  imports: [
    IonicPageModule.forChild(ConnectEquipPage),
    ComponentsModule,
  ],
})
export class ConnectEquipPageModule {}
