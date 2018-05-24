
//import { Chart, HIGHCHARTS_MODULES } from 'angular-highcharts';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConnectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-connect',
  templateUrl: 'connect.html',
  animations: [
    trigger('toggled', [
      state('open', style({
        
      })),
      state('close', style({
        height: 0
      })),
      transition('* => *', animate('.2s'))
    ])
  ]
})
export class ConnectPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //console.log('hello ConnectPage');
    //console.log(this.serie);

    setInterval(() => {
      this._val = Math.random()*200

      this._val2 = [Math.random()*100,Math.random()*100,Math.random()*100];


      this._val3 = [Math.random()*100,Math.random()*100];

      this.serie.values.values[0] =  [Math.random()*10,Math.random()*10]

      //console.log(this.serie.values);
      

    },5000)
  }

  ionViewDidLoad() {
    
    // notificaciones !! <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    
    for (const eq of this.equipos) {
      this.notifications = this.notifications.concat(eq.notifications);
    }

    //console.log('notif',this.notifications);
    
    
  }



  public notifications = [

  ]

  public notifClass= 'close';

  public equipos = [
    {
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
            labelSize: '0.8em',
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
            labelSize: '0.8em',
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
            labelSize: '0.8em',
            labelColor: 'black',
            percentage: false,
            size: '90%'
          }
        }
      ]
    },
    {
      id: '123',
      name: 'Horno 1',
      notifications:[
        {
          id: '3e4',
          msg: 'Baja eficiencia en funcionamiento',
          lvl: 1
        }
      ],
      data: [
        {
          name: 'Temperatura',
          data: 85,
          id:'yhb',
          graph: 'gauge',
          config: {
            ranges : [ 50 , 80, 120 ],
            values: 85,
            startAngle: -70,
            endAngle: 70, 
            max: 150,
            showLabel: true,
            labelSize: '0.7em',
            labelColor: 'black',
            percentage: false
          }
        },{
          name: 'Potencia',
          data: 1400,
          id:'hte',
          graph: 'gauge',
          config: {
            ranges : [ 300 , 1000, 1800 ],
            values: 1400,
            startAngle: -70,
            endAngle: 70, 
            max: 2500,
            showLabel: true,
            labelSize: '0.7em',
            labelColor: 'black',
            percentage: false
          }
        },{
          name: 'Corriente',
          data: 7,
          id:'cvg',
          graph: 'round',
          config: {
            rounded: true,
            values: [7],
            innerRadius: 60,
            max: 12,
            showLabel: true,
            showIndex: 0,
            labelSize: '0.8em',
            labelColor: 'black',
            percentage: false,
            size: '90%'
          }
        }
      ]
    }
  ]








  public lines = {
    colors : [ '#7CB5EC' , '#434348', '#90ED7D' ],
    labels:  [1],
    values: [[
      1, 2, null, null, null, 6, 11, 90, 110, 235
      ],[
          5, 25, 50, 120, 150, 32, 65, 42, 50, 100
      ]],
    height: '200px'

  }

  public gauge1=  {
    colors : [ '#65E1FB' , '#658DFB', '#8D65FB' ],
    ranges : [ 50 , 100, 150 ],
    backgroundColor:'#EEE',
    values: 15,
    innerRadius: '70%',
    outerRadius: '100%',
    startAngle: -80,
    endAngle: 80, 
    max: 200,
    showLabel: true,
    labelSize: '2em',
    labelColor: 'black',
    percentage: true,
    //size: '100%'

  }

  public serie = {
    sizes:{
      barHeight: '2em',
      fontSize: '1em',
      valuesWeight: 'bold',
      barRadius: '1em',
      verticalBarMargin: '0.4em',
    },
    show:{
      leftLabel: true,
      rightLabel: true,
      valueLabel: true,
      valuePercentaje: true,
      topBar: true,
    },
    colors:{
      bottomBar: '#7564b1',
      topBar: '#5ceb68'
    },
    values: {
      leftLabels: ['Enero','Febrero','Marzo'],
      rightLabels: ['Alza','Alza','Baja'] ,
      values: [[5,1],[7,2],[5,8]], 
    }

  }

  public serie2 = {
    sizes:{
      barHeight: '2em',
      fontSize: '1em',
      valuesWeight: 'bold',
      barRadius: '1em',
      verticalBarMargin: '0.4em',
    },
    show:{
      leftLabel: true,
      rightLabel: true,
      valueLabel: false,
      valuePercentaje: true,
      topBar: true,
      graphType: 'variablebar'
    },
    colors:{
      bottomBar: '#7564b1',
      topBar: '#5ceb68'
    },
    values: {
      leftLabels: ['Enero','Febrero','Marzo'],
      rightLabels: ['Alza','Alza','Baja'] ,
      values: [3,5,2], 
      full: 5
    }

  }
  public serie3 = {
    sizes:{
      valuesWeight: 'bold',
      barWidth: '4em',
      barRadius: '0.5em',
      contentHeight: '150px',
      valueFontSize: '0.6em',
    },
    show:{
      label: true,
      valueLabel: true,
      topBar: true,
      valuePercentaje: true,
      graphType: 'stackbarinner',
      variableBarHeight: false,
    },
    colors:{
      
      bottomBar: '#7564b1',
      topBar: '#5ceb68'
    },
    values: {
      Labels: ['Dic','Ene','Feb'],
      values: [[0,0],[94,6],[100,0]], 
      full: 0
    }

  }

  public serie4 = {
    sizes:{
      valuesWeight: 'bold',
      barWidth: '4em',
      barRadius: '0.5em',
      contentHeight: '150px',
      valueFontSize: '0.6em',
    },
    show:{
      label: true,
      valueLabel: true,
      topBar: true,
      valuePercentaje: false,
      graphType: 'stackbarinner',
      variableBarHeight: true,
    },
    colors:{
      
      bottomBar: '#7564b1',
      topBar: '#5ceb68'
    },
    values: {
      Labels: ['Oct','Nov','Dic'],
      values: [[408,71],[245,125],[339,115]], 
      full: 479
    }

  }

  public serie5 = {
    sizes:{
      valuesWeight: 'bold',
      contentHeight: '150px',
      valueFontSize: '0.6em',
      barWidth: '1em',
      barFullHeight: 80,
      barRadius: '0.5em',
    },
    show:{
      label: true,
      valueLabel: true,
      topBar: true,
      valuePercentaje: true,
      graphType: 'stackbaroutter',
      variableBarHeight: false,
      inverse: false
    },
    colors:{
      
      bottomBar: '#7564b1',
      topBar: '#5ceb68'
    },
    values: {
      Labels: ['Dic','Ene','Feb'],
      values: [[0,0],[0,0],[90,10]], 
      full: 479
    }

  }

  public serie6 = {
    sizes:{
      valuesWeight: 'bold',
      contentHeight: '150px',
      valueFontSize: '0.6em',
      barWidth: '1em',
      barFullHeight: 80,
      barRadius: '0.5em',
    },
    show:{
      label: true,
      valueLabel: true,
      topBar: false,
      valuePercentaje: false,
      graphType: 'stackbaroutter',
      variableBarHeight: false,
      inverse: false,
      align: 'center',
    },
    colors:{
      
      bottomBar: '#7564b1',
      topBar: '#5ceb68',
      barBG: '#949494',
    },
    values: {
      Labels: ['Dic','Ene','Feb'],
      values: [[10,90],[50,50],[90,10]], 
      full: 100
    }

  }

  public serie7 = {
    colors : [ '#7564b1' , '#5ceb68', '#949494' ],
    rounded: true,
    values: [80,65,50],
    innerRadius: 70,
    separation: 1,
    max: 100,
    graphHeight: '150px'
  }


  public _val = 10;
  public _val2 = [1,1,1]; 

  public _val3 = [1,1]; 

  

}
