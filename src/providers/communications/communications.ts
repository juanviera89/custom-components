import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/timeout';
import { MemoryProvider } from '../memory/memory';
import { Storage } from '@ionic/storage';
import { GeneralProvider } from '../general/general';

import { Platform } from 'ionic-angular/platform/platform';
/*
  Generated class for the CommunicationsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommunicationsProvider {

  constructor(public http: HttpClient, private memory : MemoryProvider, private general : GeneralProvider) {
    //console.log('Hello CommunicationsProvider Provider');
    this.verificarSesionPrevia();

  }


  login(userData){

    //solo devuelve resolve cuando se inicia sesion correctamente
    return new Promise ((resolve,reject) => { 

      //console.log('logeando : ');
      //console.log(userData)
      let params = userData;
 
                //Establecemos cabeceras
      let headers = new HttpHeaders()//.set('x-access-token','untoken');
         
      this.http.post('http://192.168.1.127:1102/api/login', params, {headers: headers}).timeout(10000).subscribe(
        res => {
          //console.log('se recibio respuesta de login');
          //console.log(res);
          if (res['success']){
            this.memory.setUserData(res);
            resolve({userData:res});
          } else {
            reject('No existe combinanción usuario y contraseña ingresada');
          }
          
        
        }, err => {
          //console.log('error');
          //console.log(err);
          reject(err);
        }
      )        ;


      
    })
  }

  validarToken(token){
    return new Promise ((resolve,reject) => { 

      let headers = new HttpHeaders().set('x-access-token',token);
      //console.log(token);
      
      //console.log(headers);
      
         
      this.http.get('http://192.168.1.127:1102/api/testauth', {headers: headers}).timeout(10000).subscribe(
        res => {
          //console.log('se recibio respuesta de testauth');
          //console.log(res);
          if (res['success']){
            resolve({res:true});
          } else {
            reject({res: false, code : '01', content : res}); // Invalid session on server

          }
          
        
        }, err => {
          //console.log('error');
          //console.log(err);
          //console.log(err.status);
          
          reject({res: false, code : err.status == 404 ? '01' :'03', content : err});
        }
      )        ;

    })
  }

  verificarSesionPrevia(){
    //console.log('verificar sesion previa');
    
    return new Promise ((resolve,reject) => { 
      this.memory.loadUserData().then(data =>{
        //console.log(data);
        
        this.validarToken(data['token']).then( res =>{
          if (res['res']){
            //console.log('Sesion previa confirmada');
            this.general.goToPage('InicioPage',{});

          } else {
            //console.log('invalid server session');

          }
        }).catch(err => {
          if (err.code == '01'){
            //console.log('invalid server session');
            this.memory.removeSessionData();
            
          } else {
            //console.log('method error');
            
          }
        })
      }).catch(err => {
        
        if (err.code == '02'){
          //console.log('No user data');
          
        } else {
          //console.log('method error');
          
        }
        
      })
    })
    
  }

  
}
