import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TutorialListPage } from './tutorial-list';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    TutorialListPage,
  ],
  imports: [
    IonicPageModule.forChild(TutorialListPage),

    ComponentsModule
  ],
})
export class TutorialListPageModule {}
