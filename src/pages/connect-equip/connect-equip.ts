import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConnectEquipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-connect-equip',
  templateUrl: 'connect-equip.html',
})
export class ConnectEquipPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConnectEquipPage');
  }


  public equipo =  {
      id: '654',
      name: 'Refrigerador 1',
      notifications:[
        {
          id: '1g5',
          msg: 'Alto consumo de energía',
          lvl: 2

        },{
          id: '7i9',
          msg: 'Variación de temperatura mas frecuente de lo esperado',
          lvl: 1
        }
      ],
      data: [
        {
          name: 'Temperatura',
          data: 2,
          id:'qaz',
          graph: 'gauge',
          config: {
            ranges : [ -10 , 10, 20 ],
            values: 2,
            startAngle: -70,
            endAngle: 70, 
            max: 25,
            showLabel: true,
            labelSize: '2em',
            labelColor: 'black',
            percentage: false
          }
        },{
          name: 'Potencia',
          data: 94,
          id:'qwe',
          graph: 'gauge',
          config: {
            ranges : [ 50 , 100, 200 ],
            values: 94,
            startAngle: -70,
            endAngle: 70, 
            max: 250,
            showLabel: true,
            labelSize: '2em',
            labelColor: 'black',
            percentage: false
          }
        },{
          name: 'Corriente',
          data: 0.4,
          id:'tre',
          graph: 'round',
          config: {
            rounded: false,
            values: [0.4],
            innerRadius: 60,
            max: 4,
            showLabel: true,
            showIndex: 0,
            labelSize: '2em',
            labelColor: 'black',
            percentage: false,
            size: '90%',
            labelOffset: 0.48
          }
        },{
          name: 'Potencia',
          data: [[0,20,70,94,94,94,50,0,0,0,18,67,100,94,94]],
          id:'paj',
          graph: 'lines',
          config:{
            labels:  ['10:05','10:10','10:15','10:20','10:25','10:30','10:35','10:40','10:45','10:50','10:55','11:00','11:05','11:15','11:10'],
            values: [[0,20,70,94,94,94,50,0,0,0,18,67,100,94,94]]
        
          }
        }
      ]
    }
}
