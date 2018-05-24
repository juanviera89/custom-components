import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CommunicationsProvider } from '../../providers/communications/communications';
import { GeneralProvider } from '../../providers/general/general';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public user = {
    usuario:"",
    password:""
  }
  constructor(public navCtrl: NavController, private coms : CommunicationsProvider, public general : GeneralProvider) {
    this.general.controller = this;
  }

  doLogin(){
    this.general.goToPage('InicioPage',{});
    this.coms.login(this.user).then(data =>{
    }).catch(err => {
      //console.log('error de logueo');
      
      //console.log(err);
       
    })
  }

  ionViewDidLoad(){
   
   
  }

}
