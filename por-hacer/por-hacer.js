const fs = require('fs')
let pathDb = 'db/data.json'
let listadoPorHacer = []

// const guardarDB = ( ) => {
    
//     return new Promise((resolv, reject)=>{
//         let data = JSON.stringify(listadoPorHacer)

//     fs.writeFile(pathDb,data,(err)=>{
//         if(err){
//           reject(err)
//         }
//         else
//             resolv(`tarea guardada`)
//     })
//     })    
// }

const guardarDB =() =>{
    
    let data = JSON.stringify(listadoPorHacer)
    fs.writeFile(pathDb,data,(err)=>{
                if(err){
                 throw new Error(`Erro al guardar`)
                }
            })
}

const cargarDB=() =>{
    try{
    listadoPorHacer = require('../db/data.json');
    }catch(error){
        listadoPorHacer= []
    }

}
  
const getListado=() =>{
    try{
    listadoPorHacer = require('../db/data.json');
    }catch(error){
        listadoPorHacer= []
    }
return listadoPorHacer
}

const borrar = (descripcion) =>{
    cargarDB();
    let index  = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
    if(index>=0 )  {
        listadoPorHacer.splice(index, 1)
        guardarDB();
        return true;
    }else{
      return   false;
    }
}

const actualizar= (descripcion, completado) =>{
    cargarDB();
    let index  = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)

    if(index>=0 )  {
        listadoPorHacer[index].completado = completado
        guardarDB()
        return true;
    }else{
      return   false;
    }
}

const crear = (descripcion) => {
    cargarDB()
    let porHacer = {
        descripcion,
        completado: false
    };    
    listadoPorHacer.push(porHacer)
    guardarDB();
    return porHacer;
    
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}