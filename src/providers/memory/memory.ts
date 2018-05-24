import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage/dist/storage';
import { Platform } from 'ionic-angular/platform/platform';

/*
  Generated class for the MemoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MemoryProvider {

  public userData;
  public platforms;

  public recetaDetail = [];
  public evaluationDetail;
  public manualDetail = [];
  public tutorialDetail = [];

  
  


  constructor(public http: HttpClient,private storage: Storage,platform: Platform) {
    //console.log('Hello MemoryProvider Provider');
    this.platforms = platform.platforms();
  }

  loadUserData(){
    return new Promise ((resolve,reject) => { 
      this.storage.get('TAUD').then(data => {
        if (data){
          if (data.token){
            this.userData = data;
            resolve(data);
            
          }else {
            reject({code : '02'}); //02 No user data
          }
        } else {
          reject({code : '02'}); //02 No user data
        }
      }).catch( err =>{
        reject({code : '03', content : err}); // 03 method error
      })
    })
  }

  setUserData(data){
    this.userData = data;
    
    this.storage.set('TAUD',this.userData); //Tecnoandina User Data

  }

  removeSessionData(){
    this.storage.remove('TAUD');
  }


  public users = [
    {
      username: '',
      password: '',
      userId: '',
      companyId: '',
      userLvl: 0,
      equipments: [
        'asd','qwe','zxc'
      ],
      configurations:{
        home: {
          order: ['service','connect','chef'],
          chefType: 0,
          connect:{
            equip: 'qwe',
            datos: [
              'qaz','wsx','edc','rfv'
            ]
          },
          service:{
            general: true,
            equip: null,
            dataId: 'rty'
          }
        },

      }
      
    }
  ]

  public company = [
    {
      companyId: 'qwe',
      company: 'Intercontinental',
      address: 'Calle 1.21GW ',
      equipments: [
        'asd','qwe','zxc'
      ],
      informs:[
        {
          id: 'rty',
          Datatype: 'ytr',
          data: [80,76,84,88,98,90,85],
          name: 'Disponibilidad de Equipos'
        }
      ]



    }
  ]

  public equipments = [
    {
      equipId: 'qwe',
      name: 'Equipo #1',
      description: 'Lorem Ipsum',
      type: 'poi',
      data:[
        {
          dataId: 'qaz',
          dataType: 'zaq',
          data: [8],
          name: 'Temperatura Interna'
        },
        {
          dataId: 'qaz',
          dataType: 'zaq',
          data: [37],
          name: 'Temperatura compresor'
        },
        {
          dataId: 'edc',
          dataType: 'cde',
          data: [80],
          name: 'Eficiencia Termica'
        },
        {
          dataId: 'rfv',
          dataType: 'cde',
          data: [95],
          name: 'Eficiencia compresor'
        }
      ]
    },
    {
      equipId: 'asd',
      name: 'Equipo #2',
      description: 'Lorem Ipsum',
      type: 'poi',
      data:[
        {
          dataId: 'qaz',
          dataType: 'zaq',
          data: [8],
          name: 'Temperatura Interna'
        },
        {
          dataId: 'qaz',
          dataType: 'zaq',
          data: [37],
          name: 'Temperatura compresor'
        },
        {
          dataId: 'edc',
          dataType: 'cde',
          data: [80],
          name: 'Eficiencia Termica'
        },
        {
          dataId: 'rfv',
          dataType: 'cde',
          data: [95],
          name: 'Eficiencia compresor'
        }
      ]
    },
    {
      equipId: 'zxc',
      name: 'Equipo #3',
      description: 'Lorem Ipsum',
      type: 'poi',
      data:[
        {
          dataId: 'qaz',
          dataType: 'zaq',
          data: [8],
          name: 'Temperatura Interna'
        },
        {
          dataId: 'qaz',
          dataType: 'zaq',
          data: [37],
          name: 'Temperatura compresor'
        },
        {
          dataId: 'edc',
          dataType: 'cde',
          data: [80],
          name: 'Eficiencia Termica'
        },
        {
          dataId: 'rfv',
          dataType: 'cde',
          data: [95],
          name: 'Eficiencia compresor'
        }
      ]
    }
  ]

  public dataTypes = [
    {
      dataId: 'zaq',
      config: {
        sizes:{
          contentHeight: '200px',
          barWidth: '2em',
          barFullHeight: 80,
          barRadius: '1em'
        },
        show:{
          topBar: false,
          valuePercentaje: false,
          graphType: 'stackbaroutter',
          variableBarHeight: false,
          align: 'flex-end'
        },
        colors:{
          bottomBar: '#FD4A5B',
          topBar: 'red',
          barBG: '#9DC8F1'
        },
        values: {
          full: 100
        }
    
      }
    },{
      dataId: 'cde',
      config: {
        colors : [ '#FD4A5B'],
        innerRadius: 80,
        showLabel: true,
        labelSize: '2em',
        size: '150px'
      }
    },{
      dataId: 'ytr',
      config: {
        colors : [ '#FD4A5B' ],
        height: '150px'
      }
    }
    
  ]

  
  public recetas =[
    {
      name: 'Chessecake de maracuya',
        image: 'https://www.dulcereceta.cl/wp-content/uploads/2018/01/ImagenReceta1192-1-1440x380.jpg',
        rating: '3',
        content: [
          {type: 'name', name: 'Chessecake de maracuya'},
          {type: 'rating',val:'3'},
          { type: 'media', mediaType: 'image',url:'https://www.dulcereceta.cl/wp-content/uploads/2018/01/ImagenReceta1192-1-1440x380.jpg'},
          { type: 'ingredients', ingredients: [
            {qty:'1/2',unit:'Paquete',name:' Galleta de agua'},
            {qty:'3',unit:'Cdas',name:' Mantequilla'},
            {qty:'900',unit:'g',name:' Queso crema'},
            {qty:'1/2',unit:'Taza',name:' azucar'},
            {qty:'3',unit:'Yemas',name:''},
            {qty:'1',unit:'',name:' Tarro grande de crema nestle'},
            {qty:'1',unit:'Cdta',name:'esencia de vianilla'},
            {qty:'2',unit:'Cdas',name:' Maicena'},
            {qty:'3',unit:'Claras',name:''},
            {qty:'1',unit:'Taza',name:'pulpa de maracuyá'},
           ]
          },
          {type: 'description',style:'bold',description:'Preparación:'},
          {type: 'steps', steps: [
            {
              description: 'Para la masa, muele las galletas  en una procesadora. Luego agrega en el mismo recipiente de mantequilla derretida y procesa nuevamente para unir. Luego deja esta preparación en la base de un molde desmontable de 20 a 24 centímetros de diámetro y presiona hasta dejarla extendida. Llevar al congelador mientras avanzas con el siguiente paso. Junta el queso crema con el azúcar, bate a velocidad alta hasta conseguir que el queso se ablande y quede como la textura de una crema. Añade las yemas, la crema NESTLÉ® con la esencia de vainilla y la maicena, bate nuevamente hasta integrar',
              media: null
            },
            {
              description: 'En otro bowl bate las claras a nieve y una vez lista intégralas suavemente al batido anterior junto con la pulpa de maracuyá colada (sin las pepitas) y revuelve hasta homogenizar. Retira el molde del congelador y vierte la mezcla y cubre el molde con papel aluminio. Lleve a horno pre-calentado a 170°C y hornea durante 40 minutos hasta que la preparación cuaje y se dore levemente la superficie.',
              media: null
            },
            {
              description: 'Una vez listo, retira del horno y deja entibiar pasa un cuchillo por el borde para despegarlo y luego desmóldalo cuidadosamente. Refrigera durante 30 minutos y al momento de servir distribuye en la superficie las pepitas de maracuyá separadas del paso anterior. Recuerda que la porción sugerida es de 3 dedos de grosor.',
              media: null
            },
          ]},
          {type: 'statistics',statistics:[
            {name: 'Duración',value:'60min',type:'value'},
            {name: 'Dificultad',value:'3',type:'escale'},
            {name: 'Porciones',value:'15unid',type:'value'},
            {name: 'Calorías',value:'191Kcal',type:'value'},
          ]}
          
        ]
    },
    {
      name: 'Ceviche de Pulpo',
        image: 'http://www.gourmet.cl/wp-content/uploads/2017/11/cevpul2.jpg-editada.jpg',
        rating: '4',
        content: [
          {type: 'name', name: 'Ceviche de Pulpo'},
          {type: 'rating',val:'4'},
          { type: 'media', mediaType: 'image',url:'http://www.gourmet.cl/wp-content/uploads/2017/11/cevpul2.jpg-editada.jpg'},
          { type: 'ingredients', ingredients: [
            {qty:'1',unit:'Kg',name:'pulpo limpio'},
            {qty:'1',unit:'Diente',name:'ajo'},
            {qty:'1',unit:'hoja',name:'laurel'},
            {qty:'1',unit:'Rama',name:'apio'},
            {qty:'1/2',unit:'Taza',name:'jugo de limón'},
            {qty:'1/4',unit:'Cdas',name:'ajo en polvo'},
            {qty:'1',unit:'Cdta',name:'pasta de ají amarillo'},
            {qty:'2',unit:'Cdas',name:'yogurt natural'},
            {qty:'1',unit:'Cdta',name:'sal de mar'},
            {qty:'1',unit:'',name:'Cebolla morada cortada en pluma'},
            {qty:'1/3',unit:'Taza',name:'cubos pequeños de pimentón rojo'},
            {qty:'2',unit:'Cdas',name:'ají verde picado'},
            {qty:'1/4',unit:'Taza',name:'cilantro picado'}
           ]
          },
          {type: 'description',style:'bold',description:'Preparación:'},
          {type: 'steps', steps: [
            {
              description: 'Poner el pulpo en una olla grande con el diente de ajo, hoja de laurel gourmet y rama de apio. Tapar con agua hirviendo y cocinar por 40 minutos o hasta que se pueda pinchar el pulpo con un palo de brocheta (el palo debe entrar sin resistencia). Dejar enfriar el pulpo en el líquido de cocción. Cortar los tentáculos del pulpo, y limpiar lo gelatinoso que esté adherido. Enfriar y luego cortar los tentáculos, en pedazos de 1cm.',
              media: null
            },
            {
              description: 'Para el ceviche, mezclar el jugo de limón con el aceite, ajo fresco gourmet, pasta de ají amarillo, yogurt natural y sal de mar gourmet; mezclar para emulsionar e integrar. Agregar el pulpo picado, cebolla morada, pimentón rojo y ají; dejar reposar en refrigerador al menos 30 minutos. Al servir agregar el cilantro picado.',
              media: null
            }
          ]},
          {type: 'statistics',statistics:[
            {name: 'Duración',value:'80min',type:'value'},
            {name: 'Porciones',value:'4unid',type:'value'},
          ]}
          
        ]
    },
    {
      name: 'Ensalada César con aguacate y salmón ahumado',
        image: 'https://www.laylita.com/recetas/wp-content/uploads/2016/12/Ensalada-Cesar-con-aguacate-salmon-y-queso-parmesano.jpg',
        rating: '4.5',
        content: [
          {type: 'name', name: 'Ensalada César con aguacate y salmón ahumado'},
          {type: 'rating',val:'4.5'},
          {type: 'description',style:'normal', description:'Receta sencilla y fácil para preparar la ensalada César con aguacate y salmón ahumado. La salsa o aderezo César se puede preparar con mayonesa o con yogur para una variación mas ligera.'},
          { type: 'media', mediaType: 'image',url:'https://www.laylita.com/recetas/wp-content/uploads/2016/12/Ensalada-Cesar-con-aguacate-salmon-y-queso-parmesano.jpg'},
          {type: 'description',style:'bold',description:'Para el aderezo:'},
          { type: 'ingredients', ingredients: [
            {qty:'4',unit:'Oz',name:'mayonesa o yogurt natural'},
            {qty:'4',unit:'Dientes',name:'ajo triturado'},
            {qty:'4',unit:'Cdas',name:'queso parmesano rallado'},
            {qty:'2',unit:'Cdtas',name:'mostaza'},
            {qty:'1/2',unit:'Taza',name:'aceite de oliva'},
            {qty:'2',unit:'Cdas',name:'jugo de limon'},
            {qty:'2',unit:'',name:'filetes de anchoa'},
            {qty:'',unit:'',name:'Sal y pimienta al gusto'}
           ]
          },
          {type: 'description',style:'bold',description:'Para los crutones de ajo:'},
          { type: 'ingredients', ingredients: [
            {qty:'4',unit:'',name:'Rebanadas de pan'},
            {qty:'2',unit:'Cdas',name:'mantequilla'},
            {qty:'2',unit:'Dientes',name:'ajo triturado'}
           ]
          },
          {type: 'description',style:'bold',description:'Para la ensalada César:'},
          { type: 'ingredients', ingredients: [
            {qty:'8',unit:'Oz',name:'lechuga romana en trozos'},
            {qty:'4',unit:'Oz',name:'Salmon'},
            {qty:'1',unit:'',name:'aguacate en rodajas'},
            {qty:'1/4',unit:'Taza',name:'queso parmesano rallado'},
            {qty:'2',unit:'Cdas',name:'perejil picado'}
           ]
          },
          {type: 'description',style:'bold',description:'Preparacion del aderezo:'},
          {type: 'steps', steps: [
            {
              description: 'Ponga todos los ingredientes en un procesador de alimentos pequeño o en la licuadora y licue hasta que tenga una salsa suave y cremosa. Pruebe y ajuste el sabor al gusto (mas anchoas, mas ajo, mas mayonesa/yogur, etc). Refrigere el aderezo hasta el momento de servir la ensalada',
              media: null
            }
          ]},
          {type: 'description',style:'bold',description:'Preparacion de los crutones o cuscurrones de ajo:'},
          {type: 'steps', steps: [
            {
              description: 'Haga tostar ligeramente las rebanadas de pan (o los waffles/gofres) en la tostadora o en el horno',
              media: null
            },
            {
              description: 'Mezcle la mantequilla con el ajo',
              media: null
            },
            {
              description: 'Unte la mantequilla de ajo sobre las tostadas de pan y luego córtelas en trozos pequeños',
              media: null
            },
            {
              description: 'Coloque las trozos de pan en una bandeja para hornear',
              media: null
            },
            {
              description: 'Coloque la bandeja para hornear bajo el broiler o la parrilla superior del horno durante unos 4-5 minutos, luego voltee los crutones y horneelos por otros 2-3 minutos, o hasta que estén doraditos y crujientes. El tiempo exacto varia según cada horno',
              media: null
            }
          ]},
          {type: 'description',style:'bold',description:'Preparacion de la ensalada César:'},
          {type: 'steps', steps: [
            {
              description: 'Combine los pedazos de lechuga con el aderezo y 1 cucharada del queso parmesano rallado',
              media: null
            },
            {
              description: 'Añada los pedazos de salmón ahumado y las rodajas de aguacate.',
              media: null
            },
            {
              description: 'Agregue los crutones, el perejil picado, y el queso parmesano restante',
              media: null
            },
            {
              description: 'Sirva inmediatamente',
              media: null
            }
          ]},
          
        ]
    },
    {
      name: 'Panna cotta de chocolate negro',
        image: 'https://www.laylita.com/recetas/wp-content/uploads/2018/02/Panna-cotta-de-chocolate-negro.jpg',
        rating: '5',
        content: [
          {type: 'name', name: 'Panna cotta de chocolate negro'},
          {type: 'rating',val:'5'},
          {type: 'description',style:'normal',description:'postre cremoso italiano se prepara con chocolate negro, crema o nata, leche, cacao en polvo, azúcar, gelatina y vainilla'},
          { type: 'media', mediaType: 'image',url:'https://www.laylita.com/recetas/wp-content/uploads/2018/02/Panna-cotta-de-chocolate-negro.jpg'},
          { type: 'ingredients', ingredients: [
            {qty:'1/2',unit:'Oz',name:'gelatina sin sabor en polvo'},
            {qty:'2',unit:'Tazas',name:'leche'},
            {qty:'2',unit:'Tazas',name:'crema/nata de leche para batir'},
            {qty:'1/2',unit:'Taza',name:'azucar'},
            {qty:'6',unit:'Oz',name:'chocolate negro'},
            {qty:'4',unit:'Cdas',name:'cacao en polvo amargo'},
            {qty:'1',unit:'Cdta',name:'extracto de vainilla'}
           ]
          },
          {type: 'description',style:'bold',description:'Preparación:'},
          {type: 'steps', steps: [
            {
              description: 'Ponga ½ taza de leche fría en un bol y espolvoree la gelatina sin sabor encima de la leche para suavizar la gelatina.',
              media: null
            },
            {
              description: 'En una olla de tamaño mediano, caliente el resto de la leche, la crema o nata, y el azúcar hasta que la mezcla este justo al punto de hervir.',
              media: {mediaType: 'image',size: 'contain',url:'https://www.laylita.com/recetas/wp-content/uploads/2018/02/Como-hacer-panna-cotta-de-chocolate.jpg'}
            },
            {
              description: 'Retire la olla del fuego y agregue el extracto de vainilla.',
              media: null
            },
            {
              description: 'Agregue el chocolate negro y el cacao en polvo (tamice o cierna para evitar grumos), mezcle bien y revuelva hasta que esté bien disuelto. Pruebe y ajuste la cantidad de azúcar o agregue más cacao en polvo si lo desea.',
              media: {mediaType: 'image',position:'top',url:'https://www.laylita.com/recetas/wp-content/uploads/2018/02/Como-hacer-panna-cotta-de-chocolate.jpg'}
            },
            {
              description: 'Agregue la mezcla de gelatina ablandada con leche y mezcle bien.',
              media: null
            },
            {
              description: 'Para eliminar cualquier grumo (de gelatina o chocolate), vierta la mezcla de la panna cotta de chocolate a través de un colador de malla fino.',
              media: null
            },
            {
              description: 'Llene los vasos o moldes con la mezcla de la panna cotta.',
              media: null
            },
            {
              description: 'Deje que se enfríen un poco a temperatura ambiente y luego póngalos a refrigerar durante al menos 4 horas antes de servir.',
              media: {mediaType: 'image',url:'https://www.laylita.com/recetas/wp-content/uploads/2018/02/Como-hacer-panna-cotta-de-chocolate.jpg'}
            },
            {
              description: 'La panna cotta de chocolate negro se puede servir tal cual, o con crema batida/crema chantilly, con moras o fruta, espolvoreado con cacao en polvo, o con ralladura de chocolate.',
              media: null
            }
          ]},
          {type: 'description',style:'bold',description:'Notas'},
          {type: 'description',style:'normal',description:'Si prepara este postre con chocolate semi-dulce o semi-amargo, reduzca la cantidad de azúcar, la panna cotta no debe saber excesivamente dulce.'},
          {type: 'statistics',statistics:[
            {name: 'Porciones',value:'8',type:'value'},
          ]}
          
        ]
    },
  ]
  
  
  
  public evaluaciones = [
    {
      name: 'Manejo de Smart +Kitchen',
      description: 'Evaluacion general del manejo de la aplicacion de Marsol: Smart +Kitchen. Esta evaluacion consta 4 preguntas de seleccion simple y multiple sobre aspectos y acciones disponibles en la aplicación. Cuenta con 3 minutos para responder en su totalidad la evaluacion.',
      time: [0,2],
      tags: ['Smart +Kitchen', 'App','Funcionalidad'],
      questions: [
        {
          description: '¿Cuales son las secciones principales de la aplicacion?',
          media: {
            type: null,
            url: ''
          },
          multiple: true,
          options: [
            '+Chef',
            '+Community',
            '+WebPay',
            '+Kitchen',
            '+Service',
            '+Connect'
          ]
        },
        {
          description: '¿Cual de estas acciones se puede realizar en la seccion +Service?',
          media: {
            type: null,
            url: ''
          },
          multiple: false,
          options: [
            'Realizar evaluaciones',
            'comentar recetas Marsol',
            'Aprobar presupuestos pendientes',
            'Visualizar notificaciones de sensores fuera de rango'
          ]
        },
        {
          description: 'Segun la siguiente imagen, ¿En que seccion de la aplicacion se encuentra el usuario?',
          media: {
            type: 'image',
            url: './assets/imgs/screenshot.png',
            position:'center',
            size: 'contain'
          },
          multiple: false,
          options: [
            '+Chef',
            '+Community',
            '+WebPay',
            '+Kitchen',
            '+Service',
            '+Connect'
          ]
        },
        {
          description: 'Segun el siguiente video, ¿Que tecnologia se uso para el desarrollo de Smart +Kitchen?',
          media: {
            type: 'video',
            url: './assets/videos/Presentdelcurso.MP4',
            videotype: 'video/mp4'
          },
          multiple: false,
          options: [
            'Microsoft',
            'Linux',
            'Ionic',
            'Java',
            'Android'
          ]
        },
      ],
      answers:[
        [
          '+Chef',
          '+Service',
          '+Connect'
        ],
        [
          'Aprobar presupuestos pendientes'
        ],
        [
          '+Chef'
        ],
        [
          'Ionic'
        ]
      ]
    }
  ];

  public manuales = [
    {
      name : 'Ionic',
      contenido : [
        {type: 'tittle', name: 'Ionic'},
        {type: 'description', description: 'Snipets de ionic'},
        {type:'pdf', name: 'ionic_tutorial_1', url: 'https://www.tutorialspoint.com/ionic/ionic_tutorial.pdf'}
      ]
    }
  ]

  public tutoriales = [
    {
      name : 'Consejos basicos de horno a gas',
      image : 'https://www.wikihow.com/images_en/thumb/3/33/Use-an-Oven-Step-01-Version-2.jpg/v4-728px-Use-an-Oven-Step-01-Version-2.jpg.webp',
      description: 'El horno es muy fácil de utilizar si sabes los consejos y trucos adecuados. Es necesario asegurarte de usar los utensilios de cocina adecuados en función de tu tipo de horno ',
      content: [
        {type: 'name', name: 'Consejos basicos de horno a gas'},
        { type: 'media', mediaType: 'image',url:'https://www.wikihow.com/images_en/thumb/3/33/Use-an-Oven-Step-01-Version-2.jpg/v4-728px-Use-an-Oven-Step-01-Version-2.jpg.webp'},
        {type: 'description',style:'normal',description:'El horno es muy fácil de utilizar si sabes los consejos y trucos adecuados. Es necesario asegurarte de usar los utensilios de cocina adecuados en función de tu tipo de horno'},
        {type: 'description',style:'bold',description:'Notas'},
        {type: 'steps', steps: [
          {
            description: 'Antes de empezar a usar un horno a gas (o cualquier otro), lee el manual de instrucciones para informarte sobre lo básico del encendido y apagado del horno, la colocación de las rejillas y otros aspectos de su funcionamiento.',
            media: null
          },
          {
            description: 'Usa un termómetro para horno. El horno a gas tiende a presentar una temperatura variable. Aun si lo has ajustado en una temperatura específica, el calor puede subir o bajar de forma repentina durante el proceso de cocción. Por eso, es bueno usar un termómetro para horno para medir la temperatura. Es posible que necesites subir o bajar un poco el fuego durante el proceso de cocción.',
            media: {mediaType: 'image',size: 'contain',url:'https://www.wikihow.com/images_en/thumb/e/e5/Use-an-Oven-Step-02-Version-2.jpg/v4-728px-Use-an-Oven-Step-02-Version-2.jpg.webp'}
          },
          {
            description: 'Gira las bandejas durante la cocción. Como lo hemos mencionado, el calor suele variar en el horno a gas. Algunas zonas se ponen más calientes o más frías durante la cocción. Por lo tanto, es útil abrir de vez en cuando el horno para girar unos cuantos grados las bandejas para hornear, con el fin de asegurarte de que la comida se cocine de forma homogénea.',
            media: {mediaType: 'image',size: 'contain',url:'https://www.wikihow.com/images_en/thumb/e/e5/Use-an-Oven-Step-02-Version-2.jpg/v4-728px-Use-an-Oven-Step-02-Version-2.jpg.webp'}
          },
          {
            description: 'Agregue el chocolate negro y el cacao en polvo (tamice o cierna para evitar grumos), mezcle bien y revuelva hasta que esté bien disuelto. Pruebe y ajuste la cantidad de azúcar o agregue más cacao en polvo si lo desea.',
            media: {mediaType: 'image',position:'top',url:'https://www.wikihow.com/images_en/thumb/a/a5/Use-an-Oven-Step-03-Version-2.jpg/v4-728px-Use-an-Oven-Step-03-Version-2.jpg.webp'}
          },
          {
            description: 'Coloca una piedra para hornear en el piso del horno. Esta piedra es útil para cocinar alimentos como las pizzas y los productos de panadería y pastelería. Sin embargo, también ayuda a regular la temperatura en el horno a gas. Además, permite irradiar la temperatura hacia arriba de una forma más homogénea. Ponla en el fondo del horno o en la rejilla más baja cuando no la uses. Luego, coloca el alimento que vas a cocinar justo por encima de la piedra para facilitar una cocción más homogénea.',
            media: {mediaType: 'image',position:'top',url:'https://www.wikihow.com/images_en/thumb/e/e9/Use-an-Oven-Step-04-Version-2.jpg/v4-728px-Use-an-Oven-Step-04-Version-2.jpg.webp'}
          },
          {
            description: 'Sube más arriba los alimentos que deseas más dorados por encima. En ocasiones, es difícil que los alimentos como las tartas se doren por encima en el horno a gas. Puede ser útil trasladar el plato que necesitas dorar a la bandeja superior. De este modo, se dorará más rápido.',
            media: {mediaType: 'image',position:'top',url:'https://www.wikihow.com/images_en/thumb/b/b1/Use-an-Oven-Step-05-Version-2.jpg/v4-728px-Use-an-Oven-Step-05-Version-2.jpg.webp'}
          },
          {
            description: 'Aumenta la temperatura para una textura crujiente adicional. Los hornos a gas tienden a presentar mayor humedad, lo que afecta la textura crujiente de la comida. Los alimentos como las papas rostizadas podrían no quedar crujientes con tanta facilidad. La solución es subir la temperatura del horno en 25 grados más de lo que pide la receta. Así obtendrás un producto final más crujiente.',
            media: {mediaType: 'image',position:'top',url:'https://www.wikihow.com/images_en/thumb/1/1e/Use-an-Oven-Step-06-Version-2.jpg/v4-728px-Use-an-Oven-Step-06-Version-2.jpg.webp'}
          },
          {
            description: 'No uses utensilios de metal oscuro. Nunca debes introducir metales oscuros en un horno a gas. En este tipo de horno, el calor proviene desde el fondo. Los utensilios de cocina de metal oscuro absorben el calor con mayor rapidez, lo que puede dorar o quemar la base de los platos.',
            media: {mediaType: 'image',position:'top',url:'https://www.wikihow.com/images_en/thumb/7/78/Use-an-Oven-Step-07-Version-2.jpg/v4-728px-Use-an-Oven-Step-07-Version-2.jpg.webp'}
          }
        ]},
      ]
    }
  ]



}
