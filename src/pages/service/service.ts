import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ServicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-service',
  templateUrl: 'service.html',
})
export class ServicePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicePage');
  }


  public serviceData = [
    {
      id : '1s56',
      name: 'Equipos intervenidos',
      value: [[71,408],[125,245],[115,339]],
      graph: 'v-bar',
      config: {
        sizes:{
          contentHeight: '200px',
          valueFontSize: '0.8em',
          labelFontSize: '1em',
          labelWeight: 'normal',
          valuesWeight: 'bold',
          barWidth: '3em',
          barFullHeight: 80,
          barRadius: '1em',
          verticalBarMargin: '0.3em',
          HorizontalBarMargin: '1em',
          labelVerticalBarMargin: '0.3em',
          outrerLabelLeftMargin: '0.6em'
        },
        show:{
          valuePercentaje: false,
          variableBarHeight: true,
        },
        colors:{
          label: 'black',
          valueLabel: 'white',
          bottomBar: '#42C2CC',
          topBar: '#F37961',
          barBG: '#EFF0F000',
          bottomBarBGImg: '',
          topBarBGImg: ''
        },
        values: {
          values: [[408,71],[245,125],[339,115]],
          Labels: ['Oct','Nov','Dic'],
          full: 479
        }
    
      }
    },{
      id : '9e2r',
      name: 'Mantenimientos Preventivos vs Correctivos',
      value: [[71,408],[125,245],[115,339]],
      graph: 'h-bar',
      config: {
        sizes:{
          barHeight: '2em',
        },
        show:{
          rightLabel: false,
          valueLabel: true,
          topBar: true,
          valuePercentaje: true,
        },
        colors:{
          bottomBar: '#42C2CC',
          topBar: '#F37961',
          bottomBarBGImg: '',
          topBarBGImg: ''
        },
        values: {
          leftLabels: ['jul','ago','sep','oct','nov','dic'],
          rightLabels:  [] ,
          values: [[65,35],[61,39],[63,37],[68,32],[56,44],[73,27]],
          full: 0
        }
    
      }
    }
  ]
}
