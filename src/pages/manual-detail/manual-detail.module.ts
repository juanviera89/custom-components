import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManualDetailPage } from './manual-detail';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ManualDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ManualDetailPage),
    ComponentsModule
  ],
})
export class ManualDetailPageModule {}
