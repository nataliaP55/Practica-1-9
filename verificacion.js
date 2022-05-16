/*
credenciales verificadas de un usuario
    -usuario ya registrado
    -CÑ ya registrada

credenciales registradas por algún usuario
    -usuario
    -contraseña

requisitos:
    -verificar si las credenciales usadas son válidas
    -mostrar resultado visual para el usuario

*/

const USUARIO_REGISTRADO = "Natalia";
const CONTRASENIA_REGISTRADA = "1234";
const IMG_INGRESO_ERROR = "https://img-17.ccm2.net/xu-yaWu6rNocLsxi34Ea7tlgySM=/2620x/ae9632f2fade4bfb814caf988a097242/ccm-faq/134375586_m.jpg";
const IMG_INGRESO_CORRECTO = "https://thumbs.dreamstime.com/b/correcto-6623102.jpg";


let usuarioIngresado = "usuario por def";
let contraseniaIngresada = "contraseña por def";
let cantIntentos = 0;

/*
 verifica el login
*/
function verificacion(){
    usuarioIngresado = document.querySelector('#usuario_ingresado').value;
    contraseniaIngresada = document.querySelector('#contrasenia_ingresada').value;

    if( (usuarioIngresado == USUARIO_REGISTRADO) && (contraseniaIngresada == CONTRASENIA_REGISTRADA) ){
        document.querySelector('#mensaje_resultado').innerHTML = `
            <h1> Usuario ${usuarioIngresado} bienvenido! </h1>
            <img scr=${IMG_INGRESO_CORRECTO} alt="imagen de ingreso correcto">
        `;
        cantIntentos = 0;
    }else{
        cantIntentos++;
        document.querySelector('#mensaje_resultado').innerHTML = `
            <h1> Usuario y/o contrasenia incorrectos! </h1>
            <img scr=${IMG_INGRESO_ERROR} alt="imagen de ingreso error">
            <h4> Intentos: ${cantIntentos} </h4> 
        `;
    }
} 