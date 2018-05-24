import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecetasPage } from './recetas';
import { Ionic2RatingModule } from 'ionic2-rating/dist/ionic2-rating.module';

@NgModule({
  declarations: [
    RecetasPage,
  ],
  imports: [
    IonicPageModule.forChild(RecetasPage),
    Ionic2RatingModule
  ],
})
export class RecetasPageModule {}
