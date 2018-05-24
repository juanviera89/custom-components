import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MemoryProvider } from '../../providers/memory/memory';

/**
 * Generated class for the ManualesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manuales',
  templateUrl: 'manuales.html',
})
export class ManualesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public memory : MemoryProvider) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ManualesPage');
  }

  goToMAnual(i){
    this.memory.manualDetail = this.memory.manuales[i].contenido;
    this.navCtrl.push('ManualDetailPage');
  }
}
