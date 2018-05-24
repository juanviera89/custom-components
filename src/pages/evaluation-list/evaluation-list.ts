import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MemoryProvider } from '../../providers/memory/memory';

/**
 * Generated class for the EvaluationListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evaluation-list',
  templateUrl: 'evaluation-list.html',
})
export class EvaluationListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public memory : MemoryProvider) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad EvaluationListPage');
  }

  goToEval(i){
    this.memory.evaluationDetail = this.memory.evaluaciones[i];
    this.navCtrl.push('EvaluationPage');
  }

}
