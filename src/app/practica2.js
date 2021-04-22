const fs= require('fs')
const inquirer= require ('inquirer')

function leerArchivo(path){
    const archivoLeido= new Promise(
        (resolve, reject)=>{
    
            fs.readFile(path,'UTF-8',
            (error, contenido)=>{
                if(!error){
                    console.log('Leido con exito', contenido+'\n')
                    resolve(contenido)
                }
    
            }
            
            )
       
    
    })

    return archivoLeido
}



async function ejercicio1(){
    console.log('1')
    try{
        console.log('2')
        const contenidoActual= await leerArchivo('./archivo.txt')
        console.log(contenidoActual)
        console.log('3')
        const leer= await promesaEscribirArchivo()
        console.log('4')
        console.log('5')
    
    }catch(error){

    }

    console.log('Otros datos')
}

//ejercicio1()


const promesaEscribirArchivo =()=>{
    return new Promise(
        (res,rej)=>{
            rej('Error =(')
        }
    )
}

//INQUIRER
async function main(){
    try{

        const respuesta= await inquirer.prompt([{
            type:'input',
            name:'apellido',
            message:'Ingresa tu nombre'
        },{
            type:'input',
            name:'edad',
            message:'Ingresa tu edad'
        }])
        console.log('Respuesta',respuesta)
    }catch(error){
        console.log(console.error())
    }
    
}

main()