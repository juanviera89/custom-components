import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EvaluationResultsPage } from './evaluation-results';

@NgModule({
  declarations: [
    EvaluationResultsPage,
  ],
  imports: [
    IonicPageModule.forChild(EvaluationResultsPage),
  ],
})
export class EvaluationResultsPageModule {}
