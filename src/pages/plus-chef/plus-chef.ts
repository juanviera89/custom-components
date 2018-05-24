import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PlusChefPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-plus-chef',
  templateUrl: 'plus-chef.html',
})
export class PlusChefPage {

  public pages = {
    elearning : 'ElearningPage',
    recetas : 'RecetasPage'
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad PlusChefPage');
  }

}
