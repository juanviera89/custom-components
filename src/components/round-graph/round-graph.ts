import { Component, Input,forwardRef,ElementRef} from '@angular/core';

import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RoundGraphComponent),
    multi: true
};



//import { Chart, HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as Chart from 'highcharts';
/**
 * Generated class for the RoundGraphComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'round-graph',
  templateUrl: 'round-graph.html',
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class RoundGraphComponent {

  
  @Input('item') item;

  private  updateFun= () => {} ; 

  public chart ;

  public _serie = {
    colors : [ '#7CB5EC' , '#434348', '#90ED7D' ],
    rounded: false,
    values: [80,65,50],
    innerRadius: 50,
    separation: 1,
    max: 100,
    showLabel: true,
    showIndex: 0,
    labelSize: '1em',
    labelColor: 'black',
    percentage: true,
    size: '100%',
    labelOffset: 0.40

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
    title: {
      text: 'Activity',
      verticalAlign: true,
      float: true
    },

    tooltip: {
      enabled: false
    },

    pane: {
        startAngle: 0,
        endAngle: 360,
        shape: 'arc',
        size: '100%',
        background: [{ 
            outerRadius: '112%',
            innerRadius: '88%',
            backgroundColor: "rgba(124,181,236,0.3)",
            borderWidth: 0
        }, { 
            outerRadius: '87%',
            innerRadius: '63%',
            backgroundColor: "rgba(67,67,72,0.3)",
            borderWidth: 0
        }, { 
            outerRadius: '62%',
            innerRadius: '38%',
            backgroundColor: "rgba(144,237,125,0.3)",
            borderWidth: 0
        }]
    },

    yAxis: {
        min: 0,
        max: 100,
        lineWidth: 0,
        tickPositions: []
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                enabled: false
            },
            linecap: 'round',
            stickyTracking: false,
            rounded: true
        }
    },

    series: [{
          data: [{
              color: "#7cb5ec",
              radius: '112%',
              innerRadius: '88%',
              y: 80,
              stops: [
                  [20, '#55BF3B'], // green
                  [50, '#DDDF0D'], // yellow
                  [55, '#DF5353'] // red
              ]
              
          }]
      }, {
          data: [{
              color: "#434348",
              radius: '87%',
              innerRadius: '63%',
              y: 65
          }]
      }, {
        data: [{
            color: "#90ed7d",
            radius: '62%',
            innerRadius: '38%',
            y: 50
        }]
    }]
  
  }

  public idClass = 'chartdiv' + Math.ceil(Math.random()*1000);

  constructor(private el:ElementRef) {
    //console.log('Hello RoundGraphComponent Component');
    
  }

  ngOnInit(){

    this._serie = Object.assign(this._serie,this.item);
    

  }

  ngAfterViewInit() { 

    this.setGraphOptions().then( () =>{
      this.chart = Chart.chart(this.idClass,this.chartOptions);
      setTimeout(() => {
        
      //console.log('ssss',document.getElementsByClassName(this.idClass)[0].clientHeight);
        this.chartOptions.title = {
          y: document.getElementsByClassName(this.idClass)[0].clientHeight*this._serie.labelOffset,
          text: this._serie.values[this._serie.showIndex] + (this._serie.percentage ? '%' : ''),
          verticalAlign: true,
          style: {
              fontSize: this._serie.labelSize,
              fontWeight: 'bold'
          }
        
        }
        this.chart = Chart.chart(this.idClass,this.chartOptions);
        //console.log('+++++',this.chart.series[0].points[0]);


        this.updateFun = () => {

            if (!this.innerValue.length) return;

            this.chart.title.element.innerHTML = (this.innerValue[this._serie.showIndex].toFixed(2)+ (this._serie.percentage ? '%' : ''));
            //this.chart.title.update('hola');

            for (let index = 0; index < this.innerValue.length; index++) {

                let newVal = Number( this.innerValue[index].toFixed(2))

                
      
                this.chart.series[index].points[0].update(newVal);
                
            }
            
      
            
            //console.log('-+-+',this.innerValue,this.chart.title);
            
          }
        
        
      }, 100);
      ////console.log('ssss',document.getElementsByClassName('chartdiv')[0].clientHeight);
      
      
    });
    
  }
  

  getRadius(inner,howMany,separation){
    const width = (100 - inner)/howMany;
    let radius = []
    for (let index = 0; index < howMany; index++) {
      let item = [ inner + width*index +separation/2, inner + width*(index+1) -separation/2 ];
      radius.push(item);
    }
    return radius
  }

  setGraphOptions(){

    return new Promise( (resolve,reject)=>{

      let radius = this.getRadius(this._serie.innerRadius,this._serie.values.length,this._serie.separation);

      let series = [];
      let background = [];


      for (let index = 0; index < radius.length; index++) {
        series.push({
          data: [{
              color: this._serie.colors[index],
              radius: radius[index][1]+'%',
              innerRadius: radius[index][0]+'%',
              y: this._serie.values[index],
              
          }]
        });

        background.push({ 
          outerRadius: radius[index][1]+'%',
          innerRadius: radius[index][0]+'%',
          backgroundColor: this._serie.colors[index]+'4d',
          borderWidth: 0,
          shape: 'arc'
      })
      }

      this.chartOptions.pane.background = background;
      this.chartOptions.series = series;
      this.chartOptions.plotOptions.solidgauge.rounded = this._serie.rounded
      this.chartOptions.yAxis.max = this._serie.max;
      this.chartOptions.pane.size = this._serie.size;

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
