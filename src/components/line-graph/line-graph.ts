import { Component, Input,forwardRef} from '@angular/core';

import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => LineGraphComponent),
    multi: true
};



//import { Chart, HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as Chart from 'highcharts';
/**
 * Generated class for the LineGraphComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'line-graph',
  templateUrl: 'line-graph.html',
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class LineGraphComponent {

  text: string;

  @Input('item') item;

  public chart;

  private  updateFun= () => {} ; 

  public _serie = {
    colors : [ '#7CB5EC' , '#434348', '#90ED7D' ],
    labels:  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct'],
    values: [[
      null, null, null, null, null, 6, 11, 32, 110, 235
      ],[
          5, 25, 50, 120, 150, 200, 426, 660, 50, 100
      ]],
    height: '200px'

  }

  public chartOptions : any = {
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    
    chart: {
      type: 'area',
      height: '200px',
      },
      legend: {
                  enabled: false
      },
    title: {
      text: ''
    },
      xAxis: {
      
          categories: []
      },
      yAxis: {
          title: {
              text: ''
          },
      },
      plotOptions: {
          area: {
              //pointStart: 10,
              marker: {
                  enabled: false
              }
          }
      },
      series: [{
        color:'#7CB5EC' ,
          data: [
              null, null, null, null, null, 6, 11, 32, 110, 235
          ]
      }, {
        color:'#90ED7D',
          data: [
              5, 25, 50, 120, 150, 200, 426, 660, 50, 100
          ]
      }]
  
  }

  
  public idClass = 'chartdiv' + Math.ceil(Math.random()*1000);

  
  constructor() {
  }

  ngOnInit(){

    this._serie = Object.assign(this._serie,this.item);
    //console.log('BBBBBBBBBBBBB',this._serie);

  }
  ngAfterViewInit() {

    this.setGraphOptions().then(()=>{

      

      this.chart = Chart.chart(this.idClass , this.chartOptions);

     // this.chart.series[0].points[0].update(0);
  
  
      this.updateFun = () => {
  
        //let newVal = Number( this.innerValue.toFixed(2));

        //console.log(this.innerValue);
        
        for (let index = 0; index < this.innerValue.length; index++) {
          
          this.chart.series[index].addPoint(Number(this.innerValue[index].toFixed(2)), false, true);
          
        }

        this.chart.redraw();

      }


    })

    
  }

  setGraphOptions(){

    return new Promise( (resolve,reject)=>{

      this.chartOptions.chart.height = this._serie.height;
      this.chartOptions.xAxis.categories = this._serie.labels;

      let series = []
      let color;

      for (let index = 0; index < this._serie.values.length; index++) {

        color =this._serie.colors.shift();
        this._serie.colors.push(color);

        //console.log('color',index,color,this._serie.colors);
        
        
        let item = {
          color: color,
          data: this._serie.values[index]
        }

        series.push(item);
        
      }

      this.chartOptions.series = series;

      //console.log('sssssss',this.chartOptions);
      resolve(true)

    })

  }


  //The internal data model
  private innerValue: any = '';

  //Placeholders for the callbacks which are later provided
  //by the Control Value Accessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  //get accessor
  get value(): any {
      return this.innerValue;
  };

  //set accessor including call the onchange callback
  set value(v: any) {
      if (v !== this.innerValue) {
          this.innerValue = v;
          this.onChangeCallback(v);
      }
  }

  //Set touched on blur
  onBlur() {
      this.onTouchedCallback();
      ////console.log('blur');
  }

  //From ControlValueAccessor interface
  writeValue(value: any) {
      if (value !== this.innerValue) {
          this.innerValue = value;
      }
      //this._updateVal(value);

      this.updateFun();
      
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
      this.onChangeCallback = fn;
      ////console.log('changed');
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
      this.onTouchedCallback = fn;
      ////console.log('touch');
  }

}
