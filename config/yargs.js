const optsCrear= {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'descripcion de la tarea por hacer'
    }
}

const optsActualizar = {
    descripcion:{
        demand: true,
        alias: 'd',
        desc: 'descripcion de la tarea por hacer'
    },
    completado: {
        alias : 'c',
        default:true,
        desc: 'marca como completado o pendiente la tarea',
        type: 'boolean'
    }
}
const argv = require('yargs')
            .command('crear','Crea una tarea Por hacer',optsCrear)
            .command('actualizar','Actualiza una tarea por hacer', optsActualizar)
            .command('borrar','borra una tarea',optsCrear)
            .command('listar','lista las multiples tareas')
            .help()
            .argv;
            
module.exports = {
    argv
}

