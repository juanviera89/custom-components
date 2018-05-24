import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MemoryProvider } from '../../providers/memory/memory';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

/**
 * Generated class for the EvaluationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evaluation',
  templateUrl: 'evaluation.html',
})
export class EvaluationPage {
  @ViewChild('evaluation') evaluation: Slides;

  public answers = [];

  public precheck = false;

  public alerts = [];

  public time = [0,0];

  public seconds = 0;

  public withTime = false;

  public timer;

  public canMove = true;

  public links = {
    results : 'EvaluationResultsPage'
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public memory : MemoryProvider) {
   
    for (const questions of this.memory.evaluationDetail.questions) {
      this.answers.push([])
    }
    this.time[0] = this.memory.evaluationDetail.time[0];
    this.time[1] = this.memory.evaluationDetail.time[1];
    this.withTime = this.time[0] >0 || this.time[1] >0;
    if (this.withTime){
      //this.seconds = 59;
      //this.setTimer();
    }

    //console.log(this.withTime,this.time);
    
  }

  ionViewDidLeave(){
   this.timer= null;
  }

  timerFunction(){
    if (!this.withTime) return;

    this.seconds --;

    if (this.seconds<0){

      if (this.time[1]>0){

        this.time[1] --;
        this.seconds = 59;

      }
      else if(this.time[0]>0){

        this.time[0] --;
        this.seconds = 59;
        this.time[1] = 59;

      } else {

        this.seconds = 0;

        this.canMove=false;
        this.slide(true,this.answers.length+1);
        return;
      }
    }

    this.timer = setTimeout(() => {
      this.timerFunction();
    }, 1000);

  }

  setTimer(){
    //console.log('setting timer');
    //this.seconds --;
    this.timer = setTimeout(() => {

      this.seconds --;

      if ( this.seconds<0){
        return this.minute();
      }

      this.setTimer();
    }, 1000);
  }

  minute(){
    this.time[1]--;
    if (this.time[1]<=0){

      if (this.time[0]>0){
        this.time[0]--;
        this.time[1]=59;
      } else {
        this.canMove=false;
        this.slide(true,this.answers.length+1);
        return;
      }
    }
    this.seconds = 59;
    this.setTimer();
    return ;
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad EvaluationPage');
    //console.log(this.evaluation);
    this.evaluation.lockSwipes(true);
    
    
  }

  selection(i,option, multiple = false){
    let j = this.answers[i].indexOf(option);
    if (j!=-1){
      this.answers[i].splice(j,1);
    } else{
      if (!multiple)  this.answers[i] = [];
      this.answers[i].push(option);
    }
  }

  slide(next=true, n = null){
    //console.log(n);
    
    this.evaluation.lockSwipes(false);
    if (next && n==null){
      this.evaluation.slideNext();
      this.evaluation.lockSwipes(true);
    } else if(n!=null){
      this.evaluation.slideTo(n);
    }else{
      this.evaluation.slidePrev();
      this.evaluation.lockSwipes(true);
    }
  }

  preCheckEvaluation(){

    //console.log(this.evaluation.getActiveIndex(),this.answers.length);
    this.alerts = [];

    
    for (let index = 0; index < this.answers.length; index++) {
      //console.log(this.answers[index]);
      //console.log(this.answers[index].length);
      
      
      if (this.answers[index].length == 0){
        this.alerts.push(index);
      } 
    }

    //console.log(this.alerts);
    this.slide(true,this.answers.length+1);
    
    
  }

  timeNN(n){
    let res = n + '';

    if (res.length==1) res = '0' + res;

    return res;

  }

}
