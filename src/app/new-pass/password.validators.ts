import { AbstractControl, ValidationErrors } from "@angular/forms";


export class PasswordValidators{

    static verificarOldPassword(control:AbstractControl):Promise<ValidationErrors>|null{
        return new Promise((resolve, reject)=>{
            setTimeout (()=>{
                if(control.value=="123")
                    resolve(null)
                else
                    resolve({verificarOldPassword:true})
                 
            },2000)
           
            
        });
 
    }


    static samePassword(control:AbstractControl):ValidationErrors|null{
       let newPassword= control.get('newPassword')
       let confirmPassword= control.get('repeatPassword')

       if(confirmPassword.value !== newPassword.value)
       return {passwordShouldMatch:true}
       else
       return null

    }

    
    
     

    

   
}