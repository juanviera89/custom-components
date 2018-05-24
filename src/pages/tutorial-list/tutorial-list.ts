import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MemoryProvider } from '../../providers/memory/memory';

/**
 * Generated class for the TutorialListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tutorial-list',
  templateUrl: 'tutorial-list.html',
})
export class TutorialListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public memory : MemoryProvider) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad TutorialListPage');
  }

  goToTutorial(i){
    this.memory.tutorialDetail = this.memory.tutoriales[i].content;
    this.navCtrl.push('TutorialPage');
  }
}
