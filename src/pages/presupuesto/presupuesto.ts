import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PresupuestoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-presupuesto',
  templateUrl: 'presupuesto.html',
})
export class PresupuestoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresupuestoPage');
  }

  public presupuesto = 
    {
      id: 'd965r',
      date: new Date(Date.now()),
      total: 55449990.00,
      sn: 'ps98765432',
      approved: false,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      details: 
      [
        {
          qty: 1,
          item: 'Horno para pan',
          price: 49999990
        },
        {
          qty: 2,
          item: 'Instalacion',
          price: 350000
        },
        {
          qty: 1,
          item: 'Capacitacion',
          price: 200000
        },
        {
          qty: 24,
          item: 'Mantenimiento y soprte mensual',
          price: 4800000
        },
        {
          qty: 1,
          item: 'Traslado',
          price: 100000
        }
      ]
    }
}
