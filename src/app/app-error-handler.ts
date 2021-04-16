import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler{
    handleError(error){
        alert('Errro no esperado')
        console.log(error)
    }   
}

/*
Se lo pone en module.ts 
 throw error

{provide: ErrorHandler, useClass: AppErrorHandler}

*/