import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MemoryProvider } from '../../providers/memory/memory';

/**
 * Generated class for the RecetasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recetas',
  templateUrl: 'recetas.html',
})
export class RecetasPage {

  

  constructor(public navCtrl: NavController, public navParams: NavParams, public memory : MemoryProvider) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad RecetasPage');
  }

  goToReceta(i){
    this.memory.recetaDetail = this.memory.recetas[i].content;
    this.navCtrl.push('RecetaDetailsPage');
  }
  

}


