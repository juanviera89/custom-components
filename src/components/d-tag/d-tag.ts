import { Component, Input,Output,EventEmitter ,Directive} from '@angular/core';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Storage } from '@ionic/storage/dist/storage';
import { FileOpener } from '@ionic-native/file-opener';
import { Platform } from 'ionic-angular/platform/platform';
import { AndroidPermissions } from '@ionic-native/android-permissions';

/**
 * Generated class for the DTagComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'd-tag',
  templateUrl: 'd-tag.html',

})
export class DTagComponent {

  text: string;
  private platforms;
  private DirPath = '';

  @Input('item') item;

  @Input('setTime') setTime = 0 ;


  private dtag_timer ;

  public dId = 'dtag' + Math.ceil(Math.random()*1000);

  @Output() currentTime = new EventEmitter<boolean>();

  constructor(private transfer: FileTransfer, private file: File, private storage: Storage,private fileOpener: FileOpener, platform: Platform, private androidPermissions : AndroidPermissions
  )  {
    console.log('Hello DTagComponent Component');
    this.text = 'Hello World';
    this.platforms = platform.platforms();
    //this.DirPath = this.DocsDir();

    //console.log('item2',this.item); 
  }

  ngOnInit(){

    //console.log('item',this.item);
    
 
    if (this.item.type=='media' && this.item.mediaType=='video') {




      this.dtag_timer = setInterval(()=>{
        let vid : any = document.getElementById(this.dId);
        this.currentTime.emit(vid.currentTime )
        console.log('vvvvvvvvvvvvvvvvv',vid.currentTime);
        
      },1000)

      let vid : any = document.getElementById(this.dId);
      vid.currentTime = this.setTime;
    }
  }

  ngOnDestroy() {
    
    this.dtag_timer = null;

    clearInterval(this.dtag_timer);
    //console.log('destroying dtag');
    
  } 

  

  numberOfStatisticas(n){ 
    return (n>3 ? 3.5 : 3 );
  }



  DocsDir(){

    return new Promise (  (resolve,reject) =>{ 
      let dirPath= ''
      if (this.platforms.indexOf('android')!=-1){
        dirPath = this.file.externalRootDirectory + 'Download/';
        this.file.checkDir(this.file.externalRootDirectory,'Download/').then(dirCheck =>{
          if (!dirCheck) {this.file.createDir(this.file.externalRootDirectory,'Download/',false).then(entry =>{
            console.log('dir created',entry);
            console.log('path to save ', dirPath);
            
            resolve( dirPath);
            
            }).catch(err => reject(console.log('error al crear dir ',err)));
          } else {
            console.log('path to save ', dirPath);
            resolve( dirPath);
          }
        }).catch(err => reject(console.log('error al verificar dir:',err)));
      }else{
        dirPath = this.file.documentsDirectory;
        console.log('path to save ', dirPath);
      
        resolve( dirPath);
      }
    })
    
    
  }

  downloadAndOpenDoc(name,url){
    console.log('trying to open ' + name + ' from ' + url);
    

    this.storage.get(name).then(data => {
      console.log('url data from storage', data);
      
      if (data && data != null){
        //se ha descargado
        let _url = data.url;

        let _path = _url.split('/');
        let file = _path[_path.length-1];
        _path = _path.join('/').replace(file,'')
        this.file.checkFile(_path,file).then(res =>{
          console.log('file checked',_url,'response ',res);
          
          this.openDoc(_url);
        }).catch(err =>{
          //se ha descargado pero el archivo se ha borrado
          console.log('file checked err',_url,'response ',err);
          this.verifyDirAndPermisions(name,url);
        })
        
      } else {
        //no se ha descargado
        console.log('file no downloaded' , name);
        
        this.verifyDirAndPermisions(name,url);

      }
    }).catch(err =>{
      console.log('error en memoria para archivo ' + name,err);
      
    })
  }

  verifyDirAndPermisions(name,url){
    
    return new Promise (  (resolve,reject) =>{ 



      if (this.platforms.indexOf('android')!=-1){
        //para android verificar permisos
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(
          result => {
            console.log('Has permission?',result.hasPermission);
            this.DocsDir().then(path =>{
              console.log('path to download : ' +path );
              
              this.initDocDownload(name,url,path).then(entry =>{
                this.openDoc(entry['url']);
              }).catch(err => reject(console.log('error al descargar ',err)));
            });
          },
          err =>{
             this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(res => {
              this.DocsDir().then(path =>{
                console.log('path to download : ' +path );
                this.initDocDownload(name,url,path).then(entry =>{
                  this.openDoc(entry['url']);
                }).catch(err => reject(console.log('error al descargar ',err)))

              });
             }).catch(err => reject(console.log('error al conceder permisos ',err)) );
  
            }
        );
      } else {
        //para ios proceder con verificar path
        this.DocsDir().then(path =>{
          console.log('path to download : ' +path );
          this.initDocDownload(name,url,path).then(entry =>{
            this.openDoc(entry['url']);
          }).catch(err => reject(console.log('error al descargar ',err)));

        });
      }
      

    
    });
  }

  initDocDownload(name,url,path){
    return new Promise (  (resolve,reject) =>{
      
      
      console.log('path to save downloads : ' + path);
      
      const fileTransfer: FileTransferObject = this.transfer.create();
      fileTransfer.download(url, path + name + '.pdf').then((entry) => {
        console.log(entry);
        
        console.log('download complete: ' + entry.toURL());
        
        this.storage.set(name, {url : entry.toURL()});
        resolve({url : entry.toURL()})
      }, (error) => {
        // handle error
        reject(error);
      });
    })
  }

  openDoc(path){
    this.fileOpener.open(path, 'application/pdf')
        .then(() => console.log('File is opened'))
        .catch(e => {
          console.log('Error openening file', e);
        });
  }

}
