Ext.require(['Ext.plugin.Viewport']);
Ext.onReady(function(){
	Ext.create('Ext.data.Store', {   
    storeId: 'holaStore', //identificador del almacenamiento para usar posteriormente
    fields:[ 'Hora', 'Lunes', 'Martes','Miercoles','Jueves','Viernes','Sabado'], //campos que forman el "registro"
    data: [ //en este caso, es un arreglo de objetos
        { hora:'08:00 a 09:00', lunes: 'Aplicaciones Enriquecidas de Internet',martes: 'Aplicaciones Enriquecidas de Internet' ,
        miercoles: 'Aplicaciones Enriquecidas de Internet',jueves: 'Aplicaciones Enriquecidas de Internet',  viernes:'Aplicaciones Enriquecidas de Internet', sabado:'' },
        { hora:'09:00 a 10:00', lunes: 'Lenguajes y Automatas II',martes: 'Lenguajes y Automatas II' ,
        miercoles: 'Lenguajes y Automatas II',jueves: 'Lenguajes y Automatas II',  viernes:'Lenguajes y Automatas II', sabado:''  },
        { hora:'10:00 a 11:00',lunes: 'Taller de investigación',martes: 'Taller de investigación' ,
        miercoles: 'Taller de investigación',jueves: 'Taller de investigación',  viernes:'', sabado:'' },
        { hora:'11:00 a 12:00', lunes: 'Comutación y Enrutamiento',martes: 'Comutación y Enrutamiento' ,
        miercoles: 'Comutación y Enrutamiento',jueves: 'Comutación y Enrutamiento',  viernes:'Comutación y Enrutamiento' ,sabado:''},
        { hora:'12:00 a 13:00',lunes: 'Arquitectura de software para la web',martes: 'Arquitectura de software para la web' ,
        miercoles: 'Arquitectura de software para la web',jueves: 'Arquitectura de software para la web',  viernes:'Arquitectura de software para la web' ,sabado:''},
        { hora:'13:00 a 14:00',lunes: 'Programación Logica y Funcional',martes: 'Programación Logica y Funcional' ,
        miercoles: 'Programación Logica y Funcional',jueves: 'Programación Logica y Funcional',  viernes:'', sabado:''},
        { hora:'14:00 a 15:00',lunes: 'Sistemas Programables',martes: 'Programables Sistemas' ,
        miercoles: 'Sistemas Programables',jueves: 'Sistemas Programables' , viernes:'Sistemas Programables' ,sabado:''},
        { hora:'18:00 a 19:00',lunes: 'Ingles IV',martes: 'Ingles IV' ,
        miercoles: 'Ingles IV',jueves: 'Ingles IV' , viernes:'', sabado:''}
		]
	});
	
	//Definir tabla y relacionarla
	Ext.create('Ext.grid.Panel', {
		title: 'Horario',
		//headerPosition: 'top', //probar con y sin atributo
		store: Ext.data.StoreManager.lookup('holaStore'), // Al administrador de almacen busque relación con almacenamiento
		columns: [ //columnas de tabla, pueden ser menos que en el almacenamiento
			{ text: 'Hora', 
				dataIndex: 'hora', //nombre del "campo" del "registro"
				sortable: false, //permite o no que se reordene la información
				hideable: false}, //permite o no que se oculte la columna
			{ text: 'Lunes', 
				dataIndex: 'lunes', 
				flex: 1 //1 o mayor significa que el tamaño de la columna se adaptará al contenido
			},
			{ text: 'Martes', 
				dataIndex: 'martes', 
				flex: 1 //1 o mayor significa que el tamaño de la columna se adaptará al contenido
			},
			{ text: 'Miercoles', 
				dataIndex: 'miercoles', 
				flex: 1 //1 o mayor significa que el tamaño de la columna se adaptará al contenido
			},
			{ text: 'Jueves', 
				dataIndex: 'jueves', 
				flex: 1 //1 o mayor significa que el tamaño de la columna se adaptará al contenido
			},
			{ text: 'Viernes', 
				dataIndex: 'viernes', 
				flex: 1 //1 o mayor significa que el tamaño de la columna se adaptará al contenido
			},
			{ text: 'Sabado', 
				dataIndex: 'sabado', 
				flex: 1 //1 o mayor significa que el tamaño de la columna se adaptará al contenido
			}
            
		],
		margin: '60%',
		height: 280,
		width: '80%',
		renderTo: Ext.getBody() //se pega al body
	});
});