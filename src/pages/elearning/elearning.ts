import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ElearningPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-elearning',
  templateUrl: 'elearning.html',
})
export class ElearningPage {

  public links = {
    tutorials : 'TutorialListPage',
    evaluations: 'EvaluationListPage',
    manuales: 'ManualesPage'
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ElearningPage');
  }

}
