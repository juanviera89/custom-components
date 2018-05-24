import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SolicitudPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-solicitud',
  templateUrl: 'solicitud.html',
})
export class SolicitudPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('<<<<<<',this.solicitud.lastUpdate);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SolicitudPage');
    
  }

  public status = [
    'Enviada',
    'En proceso',
    'Asignado',
    'Finalizada'
  ]


  public solicitud = 
    {
      
      id: 'ew2a6',
      date: new Date(Date.now()),
      status: 1,
      lastUpdate: new Date(Date.now()).setDate(11),
      equipment: 'Refrigerador 1',
      equipmentId: '654',
      sn: 'sm963841',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    }
}
