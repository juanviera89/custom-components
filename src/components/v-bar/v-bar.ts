import { Component, Input,Output,EventEmitter ,Directive} from '@angular/core';

/**
 * Generated class for the VBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'v-bar',
  templateUrl: 'v-bar.html'
})
export class VBarComponent {

  
  @Input('item') item;

  public _serie = {
    sizes:{
      contentHeight: '300px',
      valueFontSize: '1em',
      labelFontSize: '1em',
      labelWeight: 'normal',
      valuesWeight: 'normal',
      barWidth: '3em',
      barFullHeight: 80,
      barRadius: '1.5em',
      verticalBarMargin: '0.3em',
      HorizontalBarMargin: '1em',
      labelVerticalBarMargin: '0.3em',
      outrerLabelLeftMargin: '0.6em'
    },
    show:{
      label: true,
      valueLabel: true,
      topBar: true,
      valuePercentaje: true,
      graphType: 'stackbarinner',
      variableBarHeight: true,
      align: 'flex-end',
      inverse: false
    },
    colors:{
      label: 'black',
      valueLabel: 'white',
      bottomBar: 'blue',
      topBar: 'red',
      barBG: '#EFF0F0',
      bottomBarBGImg: 'none',
      topBarBGImg: 'none'
    },
    values: {
      Labels: [],
      values: [],
      full: 0
    }

  }

  constructor() {
    //console.log('Hello VBarComponent Component');
    
  }

  ngOnInit(){
    //called after the constructor and called  after the first ngOnChanges() 
    //console.log('Hello VBarComponent Component 22');

    for (const key in this._serie) {
      //console.log(key);
      
      if (this.item.hasOwnProperty(key)) {
        this._serie[key] = Object.assign(this._serie[key],this.item[key])
        
      }
    }
    //console.log(this._serie);
    
}

  barHeight(pair){
    ////console.log(pair);
    
    let res = {
      barHeight : '',
      bgHeight: '',
      top: '',
      bottom: ''
    }
    if (this._serie.show.variableBarHeight){
      const total = pair[0] + pair [1];
      res.barHeight = (this._serie.sizes.barFullHeight * total/this._serie.values.full) + '%';
      
      
    } else {
      res.barHeight = this._serie.sizes.barFullHeight +'%';
      
    }

    const valuesHeights = this.pairHeight(pair);
    res = Object.assign(res,valuesHeights);
    ////console.log('heights',res);
    
    return res;
  }

  percentageValues(pair){
    const total = pair[0] + pair [1];
    return [  100*pair[0]/total, 100*pair[1]/total];
  }

  pairHeight(pair){
    let res = {
      bgHeight: '',
      top: '',
      bottom: ''
    }
    let pairPercentage = this.percentageValues(pair);

    if (this._serie.show.topBar){
      res.bgHeight = '100%';
      res.bottom = pairPercentage[0] + '%';
      res.top = pairPercentage[1] + '%';
    }else {

      res.bgHeight = pairPercentage[0] + '%';
      res.bottom = '100%';
      res.top = '0%';
    }

    return res;
  }

  
}
