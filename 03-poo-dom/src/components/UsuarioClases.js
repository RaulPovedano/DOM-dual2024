export class UsuarioClases{
    #password; //propiedad privada
    constructor(nombre,email,password){
        this.nombre=nombre
        this.email=email
        this.#password=password
    }
    //--METODOS PUBLICOS--
    login(emailIntroducido, passwordIntroducido){ //no usar arrow function :(
        //comprobar el email y el password
        if(this.email===emailIntroducido && _password===passwordIntroducido){
            return `Bienvenido ${this.nombre}`;
        }
        return "Error en las credenciales"
    };


    //actualizar el email
    updateEmail(newEmail){
        this.email=newEmail;
        return `Email actualizado ${this.email}`
    }

    //obtener toda la informacion del usuario
    getInfo(){
        return `Usuario: ${this.nombre} - Email: ${this.email}`
    }
}