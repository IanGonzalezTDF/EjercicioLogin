
let boton = document.getElementById("enviar");

let usuario: string = "Juan";
let clave: string = "claveJuan";

boton?.addEventListener("click", () => {


let userIngresado : string = dato1.value;
let claveIngresada : string = dato2.value;

if(usuario==userIngresado && clave===claveIngresada){
  console.log("Bienvenido");
}else{
  console.log("El usuario o la clave son incorrectos");
});