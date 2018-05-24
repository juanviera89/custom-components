import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FacturaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-factura',
  templateUrl: 'factura.html',
})
export class FacturaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FacturaPage');
  }


  public factura = 
    {
      id: 'fds4',
      date: new Date(Date.now()),
      total: 950873.12,
      sn: 'sa12344567',
      details:[
        {
          qty: 2,
          item: 'Horno',
          amount: 400000
        },
        {

          qty: 1,
          item: 'Servicio de instalacion',
          amount: 120000
        },
        {

          qty: 1,
          item: 'Consumibles de instalacion',
          amount: 15073.00
        }
      ],
      tax: 15800.12
    }

}
