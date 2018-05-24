import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BudgetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-budget',
  templateUrl: 'budget.html',
})
export class BudgetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BudgetPage');
  }


  public facturas = [
    {
      id: 'fds4',
      date: new Date(Date.now()),
      total: 950873.12,
      sn: 'sa12344567'
    },{
      id: 'rge65',
      date: new Date(Date.now()),
      total: 11520395.27,
      sn: 'sa12344568'
    },{
      id: 'we32',
      date: new Date(Date.now()),
      total: 1350200.00,
      sn: 'sa12344569'
    },{
      id: 'bty94',
      date: new Date(Date.now()),
      total: 120500.55,
      sn: 'sa12344570'
    }
  ].reverse()

  public presupuestos = [
    {
      id: 'fds4',
      date: new Date(Date.now()),
      total: 654821.12,
      sn: 'ps98765432',
      approved: false
    },{
      id: 'rge65',
      date: new Date(Date.now()),
      total: 3695147.36,
      sn: 'ps98765433',
      approved: false
    },{
      id: 'we32',
      date: new Date(Date.now()),
      total: 7539512.90,
      sn: 'ps98765438',
      approved: true
    },{
      id: 'bty94',
      date: new Date(Date.now()),
      total: 6548521.76,
      sn: 'ps98765439',
      approved: false
    }
  ].reverse()


  public solicitudes = [
    {
      
      id: 'r21a',
      date: new Date(Date.now()),
      status: 0,
      equipment: 'Refrigerador 1',
      equipmentId: '654',
      sn: 'sm963841'
    },{
      
      id: 'qew21',
      date: new Date(Date.now()),
      status: 3,
      equipment: 'Refrigerador 1',
      equipmentId: '654',
      sn: 'sm963845'
    },{
      
      id: 'w3c89',
      date: new Date(Date.now()),
      status: 3,
      equipment: 'Horno 1',
      equipmentId: '123',
      sn: 'sm963849'
    }
  ]

}
