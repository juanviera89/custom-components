import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MemoryProvider } from '../../providers/memory/memory';

/**
 * Generated class for the RecetaDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-receta-details',
  templateUrl: 'receta-details.html',
})
export class RecetaDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public memory : MemoryProvider) {
  } 

  ionViewDidLoad() {
    //console.log('ionViewDidLoad RecetaDetailsPage');
  }

  numberOfStatisticas(n){
    return (n>3 ? 3.5 : 3 );
  }
}
