/*
grid1Horario.js
Uso de tabla con información fija con ExtJS
*/

Ext.require(['Ext.plugin.Viewport']);
Ext.onReady(function(){
	//Definir datos
	//El espacio de nombres "holis" implica que ahí se mantiene información de la aplicación 
	//La clase Store implica un almacén de datos en cliente (puede ser fijo o provenir del servidor)
	Ext.create('Ext.data.Store', {   
    storeId: 'holisStore', //identificador del almacenamiento para usar posteriormente
    fields:[ 'Clave', 'Materia', 'Profesor','Hora:','Dias','Aula'], //campos que forman el "registro"
    data: [ //en este caso, es un arreglo de objetos
        { clave: '7gAC', materia: 'RIAS', profesor: 'Monica Ruiz Martinez', hora:'08:00 a 09:00', dias:'Lunes a Viernes', aula:'L1' },
        { clave: '7g1A', materia: 'Lenguajes y Automatas', profesor: 'Rossana Graciela Trejo Pacheco', hora:'09:00 a 10:00', dias:'Lunes a Viernes',aula:'3' },
        { clave: '7g3A', materia: 'Taller de investigación', profesor: 'Marmol Enrique Santos Quintero', hora:'10:00 a 11:00', dias:'Lunes a Jueves',aula:'CB1' },
        { clave: '7g2C', materia: 'Conmutación y Enrutamiento', profesor: 'Jose Alberto Venegas Garcia', hora:'11:00 a 12:00', dias:'Lunes a Viernes',aula:'L10' },
        { clave: '7gBA', materia: 'Arquitectura de software para la web', profesor: 'Alma Ivonne Sanchez Garcia', hora:'12:00 a 13:00', dias:'Lunes a Viernes',aula:'L6' },
        { clave: '7g4C', materia: 'Programación Logica y Funcional', profesor: 'Rafael Herrera Garcia', hora:'13:00 a 14:00', dias:'Lunes a Jueves',aula:'L5' },
        { clave: '7g7C', materia: 'Sistemas programables', profesor: 'Rafael Herrera Garcia', hora:'14:00 a 15:00', dias:'Lunes a Viernes',aula:'LC02' },
		{ clave: 'IN4C', materia: 'Ingles IV', profesor: 'Abraham', hora:'18:00 a 19:00', dias:'Lunes a Jueves' ,aula:'S1'}
		]
	});
	
	//Definir tabla y relacionarla
	Ext.create('Ext.grid.Panel', {
		title: 'Detalles',
		//headerPosition: 'top', //probar con y sin atributo
		store: Ext.data.StoreManager.lookup('holisStore'), // Al administrador de almacen busque relación con almacenamiento
		columns: [ //columnas de tabla, pueden ser menos que en el almacenamiento
			{ text: 'Clave', 
				dataIndex: 'clave', //nombre del "campo" del "registro"
				sortable: false, //permite o no que se reordene la información
				hideable: false}, //permite o no que se oculte la columna
			{ text: 'Materia', 
				dataIndex: 'materia', 
				flex: 1 //1 o mayor significa que el tamaño de la columna se adaptará al contenido
			},
			{ text: 'Profesor', 
				dataIndex: 'profesor',
				menuDisabled:true,
				flex: 1 
			},
            { text: 'Hora', 
				dataIndex: 'hora',
                flex: 1 
				},
            {
            text: 'Dias', 
				dataIndex: 'dias', 
				flex: 1 //1 o mayor significa que el tamaño de la columna se adaptará al contenido
            },
            { text: 'Aula', 
				dataIndex: 'aula',
                flex: 1 
			}
            
		],
		margin: '60%',
		height: 300,
		width: '80%',
		renderTo: Ext.getBody() //se pega al body
	});

});

