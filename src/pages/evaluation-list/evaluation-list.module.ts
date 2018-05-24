import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EvaluationListPage } from './evaluation-list';

@NgModule({
  declarations: [
    EvaluationListPage,
  ],
  imports: [
    IonicPageModule.forChild(EvaluationListPage),
  ],
})
export class EvaluationListPageModule {}
