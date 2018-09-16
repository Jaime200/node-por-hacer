const color = require('colors')
const  { argv } = require('./config/yargs');
const { crear, getListado, actualizar, borrar } = require('./por-hacer/por-hacer')
// console.log(argv);

 let comando = argv._[0]

switch(comando){
    case 'crear': 
       let tarea = crear(argv.descripcion)
       
       console.log(tarea)
       
    break;
    case 'listar': 
        console.log(`tareas por hacer`)
        let listado = getListado();
        for (let tarea of listado)
        {
            console.log('============================'.green);
            console.log(`|`.green, `${tarea.descripcion}`)
            console.log(`|`.green,`Estado: ${tarea.completado ? 'completado'.blue:'no completado'.red}`)
            console.log('============================'.green);
        }
    break;
    case 'actualizar': 
        let actualizado = actualizar(argv.descripcion,argv.completado)
        console.log(actualizado);
    break;
    case 'borrar':
                 let bandera =  borrar(argv.descripcion);
                 console.log(bandera);
            break;
    default: console.log(`Comando no es reconocido`)

}