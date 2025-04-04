import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
let quien = ['Mi gato','Mi perro','Mi serpiente','Mi hamster']; // en estas primeras variales configuaramos nuestros arrays con los que queremos que aparezcan
let hizo = ['me rompió','me ensució','me arrugó','se comió'];
let cosa = ['el movil','la carpeta','la sabana','la TV'];
let cuando = ['estaba jugando futbol.',' estaba escuchando música.','estaba entrenando.','estaba duchandome.'];

let aletorio1= Math.floor(Math.random()*quien.length); // importante esta es la manera que tenemos de hacer aleatorio nuestros strring
let aletorio2= Math.floor(Math.random()*hizo.length); // Tener en cuenta que math.random funciona con strings (A TENER EN CUENTA)
let aletorio3= Math.floor(Math.random()*cosa.length); // Definimos 4 variables mas para que cada una genere nuestra palabra aleatoria de nuestro array
let aletorio4= Math.floor(Math.random()*cuando.length); //Fijarse bien en la estructura y tener en cuenta.

let excusa=quien[aletorio1]+' '+hizo[aletorio2]+' '+cosa[aletorio3]+' cuando '+cuando[aletorio4];

document.querySelector("#excusa").innerHTML= excusa;
};

//Tenemos que utilizar document.queryselector que tiene como funcion:
//seleccionar un elemento especifico (ID). Asi podemos hacer que el programa se ejecute correctamente donde nosotros queremos.

//Que es lo que implica y para que funciona el innerHTML:
// innerHTML: Propiedad que devuelve o establece el contenido HTML completo de un elemento, incluyendo tanto el texto como las etiquetas HTML dentro del elemento.
