let nombre='Lesly'

interface Usuario{
    nombre:string,
    apellido:string,
    edad?: number,
    casado:boolean|0|1,
    sueldo:number,
    estado:'AC'|'IN'|'BN'

    imprimirUsuario:(mensaje:string)=>string;
    calcularImpuesto:(impuesto:number)=>number;
    estadoActual:()=>string;

}

const lesly:Usuario={
    nombre:'Lesly',
    apellido:'Tello',
    casado:false,
    estado:'AC',
    sueldo:1000,
    imprimirUsuario:(mensaje:string)=>{
        return 'El mensaje es'+ mensaje
    },
    calcularImpuesto:(impuesto)=>{
        return lesly.sueldo*impuesto+lesly.sueldo
    },
    estadoActual:()=>{
        
        if(lesly.estado==='AC'){
            return 'AP'
        }else{
            return 'AF'
        }
    }

}


