import { DTagComponent } from './../../components/d-tag/d-tag';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecetaDetailsPage } from './receta-details';
import { Ionic2RatingModule } from 'ionic2-rating/dist/ionic2-rating.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    RecetaDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(RecetaDetailsPage),
    Ionic2RatingModule,
    ComponentsModule
  ],
})
export class RecetaDetailsPageModule {}



    
/* <p class="tittle" *ngIf="item.type=='name'" > {{item.name}} </p>
<rating *ngIf="item.type=='rating'" ngModel="{{item.val}}" readOnly="true" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" > </rating>
<div *ngIf="item.type=='media' && item.mediaType=='image'" class="image-media" 
[ngStyle]="{'background-image': 'url('+item.url+')' ,
 'background-size': item.size || 'cover',
 'background-position': item.position || 'center'}">    </div>
<!-- <img class="image-media" *ngIf="item.type=='media' && item.mediaType=='image'" src="{{item.url}}" style="width: 100%"/> -->
<video *ngIf="item.type=='media' && item.mediaType=='video'" controls="controls" preload="auto" webkit-playsinline="webkit-playsinline" class="videoPlayer" width="100%" >
    <source src="{{item.url}}" type="{{item.videotype}}" />
   </video>
<ion-list *ngIf="item.type=='ingredients'" no-lines>
  <ion-list-header>
    Ingredientes
  </ion-list-header>
  <ion-item *ngFor="let ingredient of item.ingredients; let j = index" >
    <p item-start> {{ingredient.qty + ' ' + ingredient.unit}} </p>
    <p text-wrap>{{ingredient.name}}</p>
  </ion-item>
</ion-list>
<ion-list *ngIf="item.type=='steps'" no-lines>
  <ion-list-header>
      Preparación
  </ion-list-header>
  <ion-item *ngFor="let step of item.steps; let k = index" >
    <p item-start class="step-number"> {{k+1}} </p>
    <p text-wrap>{{step.description}}</p>
    <!-- <img *ngIf="step.media!=null && step.media.mediaType=='image'" src="{{step.media.url}}" style="width: 100%"/> -->
    <div *ngIf="step.media!=null && step.media.mediaType=='image'" class="image-media-item" 
      [ngStyle]="{'background-image': 'url('+step.media.url+')' ,
      'background-size': step.media.size || 'cover',
      'background-position': step.media.position || 'center'}">    </div>
      <video *ngIf="step.media!=null && step.media.mediaType=='video'" 
      controls="controls" preload="auto" webkit-playsinline="webkit-playsinline" class="videoPlayer" width="100%" >
          <source src="{{step.media.url}}" type="{{step.media.videotype}}" />
         </video>
  </ion-item>
</ion-list>
<ion-slides  *ngIf="item.type=='statistics'" slidesPerView={{numberOfStatisticas(item.statistics.length)}} spaceBetween=1 style="height: auto">
  <ion-slide *ngFor="let stat of item.statistics" >
    <p>{{stat.value}}</p>
    <p>{{stat.name}}</p>
  </ion-slide>
</ion-slides>
<p class="description" *ngIf="item.type=='description'" [class.bold]="item.style == 'bold'"> {{item.description}} </p>
 */