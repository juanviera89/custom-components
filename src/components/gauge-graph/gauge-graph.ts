import { Component, Input,forwardRef} from '@angular/core';

import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => GaugeGraphComponent),
    multi: true
};



//import { Chart, HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as Chart from 'highcharts';

/**
 * Generated class for the GaugeGraphComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'gauge-graph',
  templateUrl: 'gauge-graph.html',
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class GaugeGraphComponent implements ControlValueAccessor{




  @Input('item') item;

  public chart;

  private  updateFun= () => {} ; 

  public _serie = {
    colors : [ '#7CB5EC' , '#434348', '#90ED7D' ],
    ranges : [ 50 , 100, 150 ],
    backgroundColor:'#EEE',
    values: 80,
    innerRadius: '70%',
    outerRadius: '100%',
    startAngle: -90,
    endAngle: 90, 
    max: 200,
    showLabel: true,
    labelSize: '2em',
    labelColor: 'black',
    percentage: true,
    //size: '100%'

  }

  public chartOptions : any = {
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    chart: {
      type: 'solidgauge',
      height: '100%',
      //animation: false
  },

    title: null,

    pane: {
      center: ['50%', '85%'],
      size: '110%',
      startAngle: -90,
      endAngle: 90, 
      background: {
          backgroundColor:'#EEE',
          innerRadius: '70%',
          outerRadius: '100%',
          shape: 'arc'
      }
    },

    tooltip: {
        enabled: false
    },

    // the value axis
    yAxis: {
        min: 0,
        max: 200,
        stops: [
            [0.1, '#55BF3B'], // green
            [0.5, '#DDDF0D'], // yellow
            [0.9, '#DF5353'] // red
        ],
        lineWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        labels: {
            y: 16
            ,enabled: false
        }
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                y: 10,
                borderWidth: 0,
                useHTML: true
            }
        }
    },

    series: [{
        name: 'Speed',
        innerRadius: '70%',
        outerRadius: '100%',
        data: [80],
        dataLabels: {
            format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                ( 'black') + '">{y}'+ (this._serie.percentage ? '%' : '') +'</span><br/></div>'
        }
    }] 
  
  }


  public idClass = 'chartdiv' + Math.ceil(Math.random()*1000);


  constructor() {
    ////console.log('Hello RoundGraphComponent Component');
    
  }

  ngOnInit(){

    this._serie = Object.assign(this._serie,this.item);
    //console.log('AAAAAAAA',this._serie);

  }

  ngAfterViewInit() {

    this.setGraphOptions().then(()=>{

        this.chart = Chart.chart(this.idClass , this.chartOptions);
        //this.chart =
        ////console.log('123456',this.chart.series[0].points[0])

        //this.chart.series[0].points[0].update(0);


        this.updateFun = () => {

        let newVal = Number( this.innerValue.toFixed(2))


        this.chart.series[0].points[0].update(newVal);

        console.log('updatefunc()',newVal);
        
    }

    })
    

    
    
  }

  setGraphOptions(){

    return new Promise( (resolve,reject)=>{

        let stops = [];

        //console.log(this._serie.colors.length);
        
        for (let index = 0; index < this._serie.colors.length; index++) {
            
            stops.push([this._serie.ranges[index]/this._serie.max,this._serie.colors[index]]);
            
        }
        this.chartOptions.yAxis.stops = stops;

      this.chartOptions.pane.background.backgroundColor = this._serie.backgroundColor;
      this.chartOptions.pane.background.innerRadius = this._serie.innerRadius;
      this.chartOptions.pane.background.outerRadius = this._serie.outerRadius;
      this.chartOptions.pane.startAngle = this._serie.startAngle;
      this.chartOptions.pane.endAngle = this._serie.endAngle;
      this.chartOptions.series[0].innerRadius = this._serie.innerRadius;
      this.chartOptions.series[0].outerRadius = this._serie.outerRadius;
      this.chartOptions.yAxis.max = this._serie.max;
      this.chartOptions.series[0].data[0] =  this._serie.values

        this.chartOptions.series[0].dataLabels = {
            format: '<div style="text-align:center"><span style="font-size:'+ this._serie.labelSize +';color:' +
                ( this._serie.labelColor) + '">{y}'+ (this._serie.percentage ? '%' : '') +'</span><br/></div>'
        }

        if (! this._serie.showLabel) this.chartOptions.plotOptions.solidgauge.dataLabels = null;
      /* this.chartOptions.series[0].dataLabels = (this._serie.showLabel ? {
        format: '<div style="text-align:center"><span style="font-size:'+ this._serie.labelSize +';color:' +
            ( this._serie.labelColor ) + '">{y}'+ (this._serie.percentage ? '%' : '') +'</span><br/></div>'
        } : {format : null} ) */

    
    //console.log('????????',this.chartOptions);
    
      resolve(true);

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
