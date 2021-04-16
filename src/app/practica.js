const fs= require('fs')



console.log("Hola")

arreglo=[{
    id:1,
    nombre:"Maria",
    nota:8
},{
    id:2,
    nombre:"Polo",
    nota:12
},{
    id:3,
    nombre:"Fabian",
    nota:7
}]



const arregloModificado=arreglo.map(
    (valorActual,indice, arregloTotal)=>{
        const arreglo2={
            id:valorActual.id,
            nombre: valorActual.nombre,
            nota:calcularNota(valorActual.nota, valorActual.nombre)
        }
        return arreglo2
    }
    
)



function calcularNota(notaActual, valorActual){
    

   
     
        if(valorActual.indexOf('a')!== -1){
            notaActual=notaActual+ 1;
        }
         if(valorActual.indexOf('e')!== -1){
            notaActual=notaActual+1
        }
         if(valorActual.indexOf('i')!== -1){
            notaActual=notaActual+1
        }
        if(valorActual.indexOf('o')!== -1){
            notaActual=notaActual+1
        }
         if(valorActual.indexOf('u')!== -1){
            notaActual=notaActual+1
        
        }
    
        return notaActual
    
 
    
}


const menorNota= arreglo.some(
    (valorActual, indice, arregloCompleto)=>{
        return valorActual.nota<9
    }
)




const filter= arreglo.filter(
    (nota)=>{
       return  nota.nota>9

    }
)


const resultado= arreglo
    .map((va)=>va.nota*1.3)
    .filter((nota)=>nota>9)
    .reduce((vacu,vac)=>vacu+vac,0)


    
const reduce= arreglo.reduce(
    (valorAcumulado,valorActual,arregloCompleto)=>{
        return valorAcumulado-valorActual.nota
    },
    100
)
console.log('Nota funcion', calcularNota(2,"Anita"))
console.log('Arreglo original: ', arreglo)
console.log('Arreglo modificado: ', arregloModificado)
console.log('SOME: ', menorNota)
console.log('Reduce: ', reduce)
console.log('FILTER: ', filter)
console.log('RESULTADO: ', resultado/3)


/*FUNCION RECIBE EL NOMBRE DEL ARCHIVO Y AGREGAR DATOS */
/* funcion utilizando CAALBACKS */

function escribirArchivo(path, contenidoNuevo){
    //readFile(path, codificacion, callback)
    //writeFile(path, contenido, codificacion, callback(error))
    fs.readFile(path,
    'UTF-8',
    (error, contenido)=>{
        if(error){
            console.log('HUBO ERROR')
        }else{
            console.log('Leyendo archivo:', contenido)

            fs.writeFile(
                path,
                contenido + '\n' +contenidoNuevo,
                'UTF-8',
                (error)=>{
                    if(!error){
                        console.log('Se escribio correctamente')
                    }
                }
            )
        }
        
    }

    )

   

}

//escribirArchivo('./archivo.txt','Datos nuevos')

/* FUNCION UTILIZANDO PROMESAS */

function promesaEsPar(numero){
    
    const  newPromise= new Promise(
        (resolve,reject)=>{
            if(numero%2==0){
                resolve(numero)
            }else{
                resolve('No es par ;(')
            }
           
        }
    )
    return newPromise;


}


function promesaCuadrado(numero){
    
    const  newPromise= new Promise(
        (resolve,reject)=>{
           const numeroElevado=Math.pow(numero,2)
               resolve(numeroElevado)
           
        }
    )
    return newPromise;


}

promesaEsPar(2)
.then(
    (contenido)=>{
        console.log('El contenido es>', contenido)

        //Devolver solo una promesa
        return promesaCuadrado(contenido)
    }
)
.then(
    (numeroParCuadrado)=>{
        console.log('Numero al cuadrado', numeroParCuadrado)
    }
)
.catch(
    (error)=>{
        console.log('Error> ',error)
    }
)

//LEER Y ESCRIBIR ARCHIVO CON PROMESAS


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

function escribirArchivo1(path,contenidoNuevo, contenido){
    const archivoModificado= new Promise(
        (resolve,reject)=>{

            fs.writeFile(path, contenido + '\n' +contenidoNuevo,
            (error)=>{
                if(!error){
                    console.log('Se escribio correctamente')
                    resolve(path)
                }
            }
            )
        }
    )

    return archivoModificado
}


function leerEscribir(path,archivoNuevo){
    leerArchivo(path)
    .then(
        (contenido)=>{
            return escribirArchivo1(path,archivoNuevo, contenido)
        }
    )

    .then(
        (path)=>{
            console.log('fin escritura')
            return leerArchivo(path)
        }
    )
    .catch(
    (error)=>{
    console.log('error', error)
}

    )

}


leerEscribir('./archivo.txt','Insertando datos')

//escribirArchivo1('./archivo.txt','Incluir datos')