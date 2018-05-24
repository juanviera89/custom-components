import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlusChefPage } from './plus-chef';

@NgModule({
  declarations: [
    PlusChefPage,
  ],
  imports: [
    IonicPageModule.forChild(PlusChefPage),
  ],
})
export class PlusChefPageModule {}
