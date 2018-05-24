
import { Component, Input} from '@angular/core';

/**
 * Generated class for the HBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'h-bar',
  templateUrl: 'h-bar.html'
})
export class HBarComponent {

  text: string;

  
  
  public _serie = {
    sizes:{
      barHeight: '2.5em',
      leftLabelWith: '15',
      rightLabelWith: '15',
      fontSize: '1em',
      leftLabelWeight: 'normal',
      rightLabelWeight: 'normal',
      valuesWeight: 'normal',
      barWidth: 'auto',
      barRadius: '1.25em',
      verticalBarMargin: '0.3em',
    },
    show:{
      leftLabel: true,
      rightLabel: true,
      valueLabel: true,
      topBar: true,
      valuePercentaje: true,
      rightLabelAlign: 'left',
      graphType: 'stackbar',
    },
    colors:{
      leftLabel: 'black',
      rightLabel: 'black',
      valueLabel: 'white',
      bottomBar: 'blue',
      topBar: 'red',
      bottomBarBGImg: 'none',
      topBarBGImg: 'none'
    },
    values: {
      leftLabels: [],
      rightLabels:  [] ,
      values: [],
      full: 0
    }

  }
  @Input('serie') serie ;
  constructor() {
    //console.log('Hello HBarComponent Component');
    //console.log(this.serie);
    
    this.text = 'Hello World';
    //console.log(this._serie);
    
  }
    ngOnInit(){
      //called after the constructor and called  after the first ngOnChanges() 
      //console.log('Hello HBarComponent Component 22');

      for (const key in this._serie) {
        //console.log(key);
        
        if (this.serie.hasOwnProperty(key)) {
          this._serie[key] = Object.assign(this._serie[key],this.serie[key])
          
        }
      }
      //console.log(this._serie);
      

    /* //console.log(this.serie);
    this._serie = Object.assign(this._serie,this.serie);
    //console.log(this._serie); */
  }
  getPercentageWidth(pair = [] ){
    const full = pair[0] + pair[1];
    let percentage : any = [(pair[0]*100/full).toFixed(2) , (pair[1]*100/full).toFixed(2)];
    percentage = [ percentage[0].toString(), percentage[1].toString()]
    ////console.log(pair,full,percentage);
    
    return percentage;
  }

  variableBarWidth(val){
    let barOriginalWidth = 100-(Number(this._serie.sizes.leftLabelWith) + Number(this._serie.sizes.rightLabelWith));
    let barVisibleWidth = barOriginalWidth*(val/this._serie.values.full);
    return barVisibleWidth;
  }
  
 

}
